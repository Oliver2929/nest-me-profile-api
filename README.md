

## Description

NestJS Profile API with Cat Facts

A simple RESTful API built with NestJS that returns developer profile information along with a dynamic cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).


## Features

- GET `/me` endpoint returns:
  - Developer profile (email, name, stack)
  - Current UTC timestamp (ISO 8601 format)
  - A random cat fact from an external API
- Graceful fallback if the Cat Facts API fails
- Environment-based configuration
- CORS enabled
- Basic logging for debugging

## Project setup locally

### 1. Clone the Repository

```bash
git clone https://github.com/Oliver2929/nest-me-profile-api.git
```

### 2. Install Dependencies

npm install

### 3. Create a .env File

Create a .env file in the root directory and add the following:
External API
CAT_FACT_API=https://catfact.ninja/fact
CAT_FACT_TIMEOUT=3000

Developer Profile
* USER_EMAIL=johndoe@gmail.com
* USER_NAME=John Doe
* USER_STACK=NestJS

Server
* PORT=3000

### 4. Run the Server

npm run start:dev

## API Endpoint
Get/me - Returns a JSON response with the following structure: 
```bash
{
  "status": "success",
  "user": {
    "email": "johndoe@gmail.com",
    "name": "John Doe",
    "stack": "NestJS"
  },
  "timestamp": "2025-10-16T10:37:07.418Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```
## Dependencies

* NestJS

* Axios

* dotenv

* nodemon (dev)




