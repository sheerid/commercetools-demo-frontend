package main

import (
	"errors"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Compress(5))
	r.Use(middleware.RealIP)

	port := ":8081"
	if len(os.Args) > 1 {
		port = os.Args[1]
	}

	fsh := http.FileServer(http.Dir("."))
	r.HandleFunc("/*", func(w http.ResponseWriter, r *http.Request) {
		p := path.Clean(strings.TrimPrefix(r.URL.Path, "/"))
		if p == "" {
			p = "index.html"
		}
		_, err := os.Stat(p)
		if errors.Is(err, fs.ErrNotExist) {
			log.Printf("404 %s %s", r.Method, r.URL.Path)
			// write content of /index.html to w

			// get file extension of r.URL.Path
			ext := filepath.Ext(p)
			if ext == ".js" {
				w.Header().Set("Content-Type", "application/javascript")
				return
			}
			if ext == ".css" {
				w.Header().Set("Content-Type", "text/css")
				return
			}
			b, err := os.ReadFile("index.html")
			if err != nil {
				log.Println(err)
				return
			}
			w.Write(b)
			return
		}
		fsh.ServeHTTP(w, r)
	})
	log.Printf("listening on http://localhost%s/", port)
	log.Fatal(http.ListenAndServe(port, r))
}
