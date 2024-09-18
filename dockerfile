FROM ubuntu:latest

# Copy local HTML, JS, and CSS files to the default Nginx directory inside the container
RUN apt-get update && \
    apt-get install nginx -y && \
    rm /var/www/html/index.nginx-debian.html

COPY . /var/www/html

# Expose port 80 for the web server
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]