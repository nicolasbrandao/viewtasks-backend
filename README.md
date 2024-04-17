# ViewTasks API - Just To-Do it!
## Description

This is the API for ViewTasks - Just To-Do it! App. It provides endpoints for user authentication, managing task lists, and performing CRUD operations on tasks within those lists.

## Usage

Run the project for development:

```sh
# install dependencies
pnpm i

# generate PrismaClient
pnpm db:generate

# migrate db
pnpm db:migrate dev

# start server
pnpm start:dev
```

Set the env var as the `.env.example` file.

# API Endpoints

You can checkout the docs through swagger here: [ViewTasks API Documentation](https://viewtasks-backend.fly.dev/docs)

## Health Check API [/]

This API allows you to perform a health check on the server.

### Health Check Mock-up [/] [GET]

Perform a health check on the server.

+ Response 200 (text/plain)

    ```
    Hello World!
    ```

## Users API [/users]

This API allows you to create a users.

### Create a User [/users] [POST]

Create a new user.

+ Request (application/json)
    + Body
        ```
        {
            "email": "john@example.com"
            "password: "password123"
        }
        ```

+ Response 200 (application/json)
    ```
    {
        "id": "clv2y4yr400003wrwxddypgn9",
        "email": "john@example.com"
        "password": "$2b$10$2R/hGVlSyWsm5wqa/Ih5Z.iu4ekAAJJaUwPx3zf7uWsSA.U186mt." 
    }
    ```

## Authentication API [/auth]

This API allows users to authenticate and obtain access tokens.

### Sign In [/auth/login] [POST]

Sign in and obtain an access token.

+ Request (application/json)
    + Body
        ```
        {
            "email": "john@example.com",
            "password": "password123"
        }
        ```

+ Response 200 (application/json)
    ```
    {
        "access_token": "<access_token>"
    }
    ```

## Tasks Lists API [/tasks-lists]

This API allows you to perform CRUD operations on tasks lists.

### Create a Tasks List [/tasks-lists] [POST]

Create a new tasks list.

+ Request (application/json)
    + Headers
        + Authorization: Bearer <token>
    + Body
        ```
        {
            "title": "Groceries",
            "userId": "clv2y4yr400003wrwxddypgn9"
        }
        ```

+ Response 200 (application/json)
    ```
        {
            "id": "clv2y8ozp00023wrwoe2crzi6",
            "userId": "clv2y4yr400003wrwxddypgn9",
            "title": "Groceries"
        }
    ```

### Get Tasks Lists by User ID [/tasks-lists] [GET]

Retrieve all tasks lists filtered by userId.

+ Headers
    + Authorization: Bearer <token>

+ Parameters
    + userId (optional, string) - Filter tasks lists by userId.

+ Response 200 (application/json)
    ```
    [
        {
            "id": "clv2t1r0e000413lvgvfhbxhp",
            "userId": "clv2t1eth000013lvqfen684w",
            "title": "Study Go"
        },
        {
            "id": "clv31skus000112tjlt4vizp4",
            "userId": "clv2t1eth000013lvqfen684w",
            "title": "Groceries"
        }
    ]
    ```

### Update a Tasks List [/tasks-lists/{id}] [PATCH]

Update a tasks list.

+ Parameters
    + id (string) - ID of the tasks list.

+ Request (application/json)
    + Headers
        + Authorization: Bearer <token>
    + Body
        ```
        {
            "id": "clv2t1okk000213lv79vr841i",
            "title": "Updated Tasks List"
        }
    
        ```
+ Response 200 (application/json)
    ```
    {
        "id": "clv2t1okk000213lv79vr841i",
        "userId": "clv2t1eth000013lvqfen684w",
        "title": "Updated Tasks List"
    }
    ```

### Delete a Tasks List [/tasks-lists/{id}] [DELETE]

Delete a tasks list by its ID.

+ Headers
        + Authorization: Bearer <token>

+ Parameters
    + id (string) - ID of the tasks list.

+ Response 200 (application/json)
    ```
    {
        "id": "clv2t1okk000213lv79vr841i",
        "userId": "clv2t1eth000013lvqfen684w",
        "title": "Deleted Tasks List"
    }
    ```

## Tasks API

This API allows you to perform CRUD operations on tasks.

### Create a Task [/tasks] [POST]

Create a new task.

+ Request (application/json)
    + Headers
        + Authorization: Bearer <token>
    + Body
        ```
        {
            "title": "Study JS",
            "tasksListId": "clv2t1okk000213lv79vr841i"
        }
        ```

+ Response 200 (application/json)
    ```
    {
        "id": "clv30ncl40001iexcr1peormp",
        "tasksListId": "clv2t1okk000213lv79vr841i",
        "title": "Study JS",
        "completed": false
    }
    ```

### Get Tasks by Task List ID [/tasks] [GET]

Retrieve all tasks filtered by tasksListId.

+ Headers
    + Authorization: Bearer <token>

+ Parameters
    + tasksListId (optional, string) - Filter tasks by tasksListId.

+ Response 200 (application/json)
    ```
    [
        {
            "id": "clv2t29zf000613lv4zyijgyk",
            "tasksListId": "clv2t1okk000213lv79vr841i",
            "title": "Study Design Patterns",
            "completed": true
        },
        {
            "id": "clv2tc7an000a13lvxahcpv4u",
            "tasksListId": "clv2t1okk000213lv79vr841i",
            "title": "Study GO",
            "completed": false
        },
    ]
    ```

### Update a Task [/tasks/{id}] [PATCH]

Update a task.

+ Headers
        Authorization: Bearer <token>
        
+ Parameters
    + id (string) - ID of the task.

+ Request (application/json)
    + Headers
        Authorization: Bearer <token>
    + Body
        ```
        {
            "title": "Updated Task Title",
        }
        ```

+ Response 200 (application/json)
    ```
    {
        "id": "clv2tc7an000a13lvxahcpv4u",
        "tasksListId": "clv2t1okk000213lv79vr841i",
        "title": "Updated Title",
        "completed": false
    }
    ```

### Delete a Task [/tasks/{id}] [DELETE]

Delete a task by its ID.

+ Headers
        Authorization: Bearer <token>

+ Parameters
    + id (string) - ID of the task.

+ Response 200 (application/json)

    ```
    {
        "id": "clv2tc7an000a13lvxahcpv4u",
        "tasksListId": "clv2t1okk000213lv79vr841i",
        "title": "Deleted Task",
        "completed": false
    }
    ```

## Technical Description

This App is built with Nest.js, Prisma ORM ans sqlite. Nest.js provides a solid foundation for building scalable server-side applications, while Prisma ORM simplifies database interactions and ensures type safety. Other packages enhance security and monitoring capabilities, contributing to the overall reliability and performance of the application.

### How They Work Together

1. **Nest.js and Middleware**:
   - Nest.js provides the foundational framework for building the application, including routing, controllers, and middleware integration.
   - AuthGuard, rate limiter, and logger are seamlessly integrated into the Nest.js application to enhance security, control access, and monitor requests.

2. **Prisma ORM**:
   - Prisma ORM acts as the interface between the Nest.js application and the database.
   - Prisma ORM abstracts away the database interactions, providing a type-safe API and a easier way to develop SQL queries.
   - Prisma's auto-generated client types serve as Data Transfer Objects (DTOs) for interacting with the database, ensuring type safety and reducing manual coding effort.

3. **SQLite Database**:
   - SQLite serves as the backend database for storing application data.
   - Prisma ORM communicates with the SQLite database service to execute database queries and transactions.

4. **Integration**:
   - Controllers and services within the Nest.js application utilize the Prisma client to interact with the database through the database resources. This ensures a seamless flow of data between the application logic and the underlying data storage.

### Tech Stack

- **Nest.js**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Prisma**: A modern database toolkit that makes database access easy with type-safe database queries through TypeScript.
- **SQLite**: A lightweight, self-contained SQL database engine used for development and testing purposes.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Swagger**: An open-source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful web services.
- **Throttler**: A tool for rate limiting incoming requests to your server, providing protection against abuse or excessive usage.
- **Bcrypt**: A password-hashing function designed to be slow and resistant to brute-force attacks.

### Code Organization

The codebase of this application is organized into several modules and follows a structured approach to maintainability and scalability:

- **Main Application Entry Point**: The main entry point of the application is located in the `main.ts` file. This file initializes the Nest.js application using `NestFactory.create()`, sets up Swagger documentation using `SwaggerModule`, and listens for incoming requests on the specified port and host.

- **Authentication Module**: The authentication module main files are (`auth.module.ts`, `auth.controller.ts`, `auth.service.ts`, `auth.guard.ts`, and `constants.ts`). It handles user authentication using JWT (JSON Web Tokens). The `AuthController` provides endpoints for user authentication, while the `AuthService` handles the business logic. The `AuthGuard` implements a guard to protect routes that require authentication.

- **Database Module**: The database module (`database.module.ts` and `database.service.ts`) provides a centralized database service using Prisma. It extends the Prisma client and exports the database service to be used across the application.

- **Prisma Schema**: The Prisma schema file (`prisma/schema.prisma`) defines the data model for the application. It includes models for users, tasks lists, and tasks, along with their respective fields and relationships. Prisma schema language is used to specify the schema, including data types, relationships, and constraints.

- **User Module**: The user module (`users.module.ts`, `users.controller.ts`, and `users.service.ts`) manages user-related operations such as user creation and retrieval. It interacts with the database service to perform CRUD operations on the user entity.

- **Tasks List Module**: The tasks list module (`tasks-lists.module.ts`, `tasks-lists.controller.ts`, and `tasks-lists.service.ts`) handles tasks list management, including creation, retrieval, update, and deletion. It utilizes the database service to interact with the tasks list entity in the database.

- **Tasks Module**: The tasks module (`tasks.module.ts`, `tasks.controller.ts`, and `tasks.service.ts`) is responsible for task management within a tasks list. It provides endpoints for creating, updating, and deleting tasks, and interacts with the database service to perform database operations.

Each module follows the separation of concerns principle, encapsulating related functionality into cohesive units. This modular structure enhances code maintainability, readability, and testability.

### Improvements / Next Steps

- Deploy with postgres
- Auth Sessions
- Implement Passport
- CSRF Protection

### References

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/)
- [SQLite Documentation](https://www.sqlite.org/)
- [Swagger Documentation](https://swagger.io/)
- [NestJS Rate Limiting Documentation](https://docs.nestjs.com/security/rate-limiting)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md)

