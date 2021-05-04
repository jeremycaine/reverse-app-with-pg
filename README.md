# reverse-app-with-pg
Simple web app that reverses text input and stores in Postgres database

## Setup Postgres database. 
If using Postges locally for development after install you can use `npm run pg-start` and `npm run pg-stop` to start and stop Postgres engine.

Create database, schema, tables and populate with data using `npm run pg-init`.

In order for the app to run locally and connect to Postgres, edit `.env.local` with your environment variables populated. 

Example:
```
PGHOST=localhost
PGPORT=5432
PGUSER=jeremycaine
PGDATABASE=sample
```

# Setup application
Install the NodeJS dependencies
```
npm install
```

Run in dev mode `npm run dev` or a production build
```
npm run build
npm run start
```
