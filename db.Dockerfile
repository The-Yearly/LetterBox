FROM mariadb:latest
ENV MYSQL_ROOT_PASSWORD=Arduino1
COPY ./tabl3.sql /docker-entrypoint-initdb.d/
