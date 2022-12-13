FROM golang:1.19
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install -y yarn vite make
COPY . /root/source
RUN cd /root/source/webserver && GOOS=linux go build -ldflags="-extldflags=-static" .
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN cd /root/source && yarn && yarn build

FROM ubuntu:latest  
COPY --from=0 /root/source/dist /dist
COPY --from=0 /root/source/webserver/webserver /
WORKDIR /dist
CMD ["/webserver", ":80"]
