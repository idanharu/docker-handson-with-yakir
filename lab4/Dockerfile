FROM alpine:3.19
RUN apk add --no-cache python3
WORKDIR /app
ENV PORT=5000
EXPOSE 5000
CMD ["sh", "-c", "python3 -m http.server $PORT"]