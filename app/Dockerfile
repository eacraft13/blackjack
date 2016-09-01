FROM nginx:1.11

COPY dist/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/blackjack.conf
RUN rm /etc/nginx/conf.d/default.conf

COPY ssl/privkey.pem /etc/ssl/private/ssl-cert.key
COPY ssl/cacert.pem /etc/ssl/certs/ssl-cert.pem
