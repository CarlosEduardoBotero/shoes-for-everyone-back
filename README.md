# shoes-for-everyone-backend

### 📖 Description

  + [ ] [Swagger](https://TODO)

### ❤️ Available on

https://api-shoes-ecommerce.onrender.com

**Note:** Web Services on the free plan are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, **Render** spins it up again so it can process the request. This can cause a response delay of up to 30 seconds for the first request that comes in after a period of inactivity.

### 🔧 Technologies used
- node 16.15.0
- nestjs
- typescript
- typeorm
- postgresql - https://www.elephantsql.com/
- docker
- render - Cloud Application Hosting

### 🏁 API Usage

### ✨ Local environment set up

```bash
git clone (this repo)

cd shoes-for-everyone-back

cd api

npm install

# copy example _.env to .env
cp _.env .env

# run initialization script
npm run init

# development
npm run start

# watch mode
npm run start:dev
```
**Tests**
```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

### 📦 Production environment

### 📝 Documentation

**Useful commands**

```bash
# CRUD generator:
npx @nestjs/cli g resource [path/name]
# Example: npx @nestjs/cli g resource apps/auth

# Generates a new migration file with sql needs to be executed to update schema
npm run migration:generate src/migrations/example/create-example-table

# create a new empty migration file
npm run migration:create ./src/migrations/example/create-example-table

# Run all migrations
npm run migration:run

# Run any SQL query you want directly in the database
npm run query "SELECT version();"

# Show all migrations and whether they have been run or not
npm run migration:show

# Revert the last migration. Run it several times to revert multiple migrations
npm run migration:revert
```

### ⚙️ Initial project setup
- Install nestjs cli locally and create a new project

```bash
npx @nestjs/cli new  api
```

- Create health check controller

```bash
npx @nestjs/cli generate controller health-check
```

- Install database dependencies

```bash
npm install --save @nestjs/typeorm typeorm pg
```
- Install library to manage environment variables

```bash
npm install --save dotenv
```

- Unique string ID generator
https://github.com/ai/nanoid#install
```bash
npm install --save nanoid@3
```

### Contributors
<a href="https://github.com/CarlosEduardoBotero/shoes-for-everyone-back/graphs/contributors"><img src=""/></a>


### License
