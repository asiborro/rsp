# Zalando Workshop

This is the base for the workshop. The objective of this workshop is to compare state management with _redux-(sagas)_ versus the new _Context API_.

## Project overview

Each project has multiple steps that can be found in the following branches:

Provider:
* provider0: Implement the _Provider_ for the Cart
* provider1: Implement the _Consumers_ and wire the UI
* provider2: Implementation example

Redux-Sagas:
* sagas0: Asynchronous flow with sagas to fetch articles
* sagas1: Cart operations (add & remove)
* sagas2: Display cart badge with total amount of items
* sagas3: Stock flow with sagas

## Quick start
Install Node.js with a version above or equal to 8:
```
node --version
```
Clone the project:
```
git clone git@github.com:asiborro/rsp.git
```
Download all the dependencies by running on the root of the project:
```
npm i local_modules/mock-api-server -D
```
Start the mock server by running on the root of the project:
```
npm run start:server
```
The mock API should be available on t[http://localhost:8090](http://localhost:8089).
```
npm run start
```
The project should open automatically on a browser (otherwise, you can always open manually with [http://localhost:8080](http://localhost:8080)).
