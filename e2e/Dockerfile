FROM cypress/included:10.3.0

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js

RUN npm i