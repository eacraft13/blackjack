FROM node:6.5

RUN useradd --user-group --create-home --shell /bin/false blackjack

ENV HOME=/home/blackjack

COPY package.json npm-shrinkwrap.json $HOME/app/
RUN chown -R blackjack:blackjack $HOME/*

USER blackjack
WORKDIR $HOME/app/
RUN npm install

USER root
COPY . $HOME/app/
RUN chown -R blackjack:blackjack $HOME/*
USER blackjack

CMD ["node", "index.js"]
