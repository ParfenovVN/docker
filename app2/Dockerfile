FROM nodejscn/node

ENV DOCK_HOST="Training"

LABEL maintainer=a0z9@rambler.ru

WORKDIR /var/wapp

COPY wapp.js .

RUN date ; echo test wapp dockerfile

EXPOSE 8080
VOLUME /var/wapp/logs


ENTRYPOINT ["node", "wapp.js"]




