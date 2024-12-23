FROM nginx:latest as release
COPY dist/* /usr/share/nginx/html/
COPY dist/assets/* /usr/share/nginx/html/assets/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]