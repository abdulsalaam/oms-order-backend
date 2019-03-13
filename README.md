# RESTful API using Node.js, Express, Mongoose & TypeScript
@By Abdul Salam
This is a Orde Management System (order backend microservice) for building scalable and robust REST APIs using Node.js & TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Directory Structure](#directory-structure)
  - [Available Routes](#available-routes)
  - [Available Scripts](#available-scripts)
- [License](#license)

## Prerequisites

- Using the last ES6 / ES7 features as `async-await`

- Versioned routes for better scalability

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Rename the file `.env.example` to `.env`, then you need to configure the file `config.ts` located in `src/config`

3. Start the app using `npm run dev`

4. After that, go to: `http://localhost:3000/v1/users`

### Available routes

| Method   | Resource        | Description                                                                                                                                 |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`   | `/register`     | Create a new user in the DB. You need to specify in the body the following attributes: name, lastname, email & password.                    |
| `POST`   | `/authenticate` | Sign in with the email & password. If it's successful, then generates a token                                                               |
| `GET`    | `/users`        | Returns the collection of users present in the DB.                                                                                          |
| `GET`    | `/users/:id`    | It returns the specified id user. You need to specify the token in the header with the following format: `Authorization: Bearer your-token` |
| `PUT`    | `/users/:id`    | Updates an already created user in the DB                                                                                                   |
| `DELETE` | `/users/:id`    | Deletes a user from the DB  
for order   
| `POST`    | `/orders`        | create new order in the collection of orders present in the DB.                                                            |
| `GET`    | `/orders`        | Returns the collection of orders present in the DB.                                                                                          |
| `GET`    | `/orders/:id`    | It returns the specified id order. You need to specify the token in the header with the following format: `Authorization: Bearer your-token` |
| `PUT`    | `/orders/:id`    | Updates an already created order in the DB 
| `PUT` | `/orders/payment/:id`    | update an order status in the orders collection in the DB                                                                                   |
| `DELETE` | `/orders/:id`    | Deletes a order from the DB                                                                                                                |

### Available scripts

- `build` - Transpile TypeScript to ES6,
- `lint` - Lint your TS code,
- `dev` - To run the app without transpile to ES6,
- `clean` - Remove dist, node_modules, coverage folders,
- `start` - Run the transpiled app
- `prod` - Build & run the transpiled app

## License

MIT © Abdul Salam
