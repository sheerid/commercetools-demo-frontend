FROM golang:1.19
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install -y yarn vite make
COPY . /root/source
RUN git clone https://github.com/gpmd/webserver.git
RUN cd webserver && go build . && pwd
RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs
RUN cd /root/source && yarn && yarn build

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
COPY --from=0 /root/source/dist /dist
COPY --from=0 /root/webserver/webserver /
WORKDIR /dist
CMD ["/webserver", ":80"]
