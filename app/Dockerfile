FROM nginx:1.11

COPY html/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/blackjack.conf

RUN rm /etc/nginx/conf.d/default.conf
