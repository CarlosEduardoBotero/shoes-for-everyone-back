#!/bin/bash

# WIP
# compilation
npm run build

npm run migration:query "CREATE SCHEMA IF NOT EXISTS """example""";"

npm run migration:run

exec "$@"
