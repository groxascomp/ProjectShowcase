# Project Showcase

A personal portfolio application with a React/Vite frontend and a Spring Boot backend backed by MySQL.

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS
- Backend: Spring Boot, Spring Data JPA
- Database: MySQL
- Java: 25

## Prerequisites

Install the following before running the project:

- Java Development Kit (JDK) 25
- Node.js and npm
- MySQL Server

Make sure `java`, `node`, `npm`, and `mysql` are available in your terminal's `PATH`.

## Database Setup

Create the database in MySQL:

```sql
CREATE DATABASE project_showcase;
```

The backend currently expects these MySQL settings:

| Setting  | Value              |
| -------- | ------------------ |
| Host     | `localhost`        |
| Port     | `3307`             |
| Database | `project_showcase` |
| Username | `root`             |
| Password | `root`             |

These values are configured in `backend/showcase/src/main/resources/application.properties`. Update that file if your local MySQL configuration is different. The application uses `spring.jpa.hibernate.ddl-auto=update`, so Hibernate updates the tables when the backend starts.

## Run the Application

Open two terminals from the repository root.

### 1. Start the backend

On Windows:

```powershell
cd backend/showcase
./mvnw.cmd spring-boot:run
```

On macOS or Linux:

```bash
cd backend/showcase
./mvnw spring-boot:run
```

The backend runs at `http://localhost:8086`.

### 2. Start the frontend

In the second terminal:

```powershell
cd frontend/showcase
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

The Vite development server proxies frontend requests from `/api` to the backend at `http://localhost:8086`.

## Useful Commands

### Frontend

```bash
npm run dev          # Start the development server
npm run build        # Create a production build
npm run preview      # Preview the production build
npm run lint         # Run ESLint
npm run format       # Format frontend files
npm run format:check # Check formatting
```

### Backend

Run these commands from `backend/showcase`:

```powershell
./mvnw.cmd test
./mvnw.cmd clean package
```

To run the packaged application:

```powershell
java -jar target/showcase-0.0.1-SNAPSHOT.jar
```

## Troubleshooting

- **Database connection failed:** Confirm MySQL is running on port `3307`, the `project_showcase` database exists, and the credentials in `application.properties` are correct.
- **Frontend cannot load data:** Start the backend first and confirm it is available at `http://localhost:8086`.
- **Port already in use:** Change `server.port` in the backend properties or the Vite port configuration, then update the proxy target if needed.
- **Java version error:** Confirm that JDK 25 is installed and that `java -version` reports the expected version.

## In the future, I may add a an admin page where user can CRUD database without using Bruno. Ow, on how to CRUD in bruno. Just ask your copilot to provide. It is so many to type XD
