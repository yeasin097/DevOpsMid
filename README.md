# Project Name

A brief description of your project. Explain what it does and why it is useful.


### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/DevOps-Engineering-me/Multi-stage-Docker-Build.git
```


### 2. Navigate to the Project Directory

Go to the folder where the repository was cloned:

```bash
cd Multi-stage-Docker-Build
```

### 3. Build the Docker Image

Build the Docker image using the `Dockerfile` included in the project:

```bash
docker build -t my-app:latest .
```


### 4. Run the Docker Container

Run the container using the built image:

```bash
docker run -p 3000:3000 my-app
```

- Replace `<host_port>` with the port you want to use on your local machine.
- Replace `<container_port>` with the port the application uses inside the container.
- Replace `<image_name>` with the name of the Docker image you built earlier.

### 5. Access the Application

Once the container is running, access the application by navigating to:

```
http://localhost:3000
```

Replace `<host_port>` with the port you specified in the previous step.

## Stopping the Container

To stop the container, use the following command:

```bash
docker ps
```


# Multi-Stage Dockerfile Explanation

## **Stage 1: Builder**

### 1. `FROM node:18-alpine AS builder`
- **What it does**:  
  - Defines the base image for the first stage, named **builder**.  
  - Uses `node:18-alpine`, a lightweight Node.js image based on Alpine Linux.  
  - `AS builder` assigns a name to this stage for referencing in later stages.

---

### 2. `WORKDIR /app`
- **What it does**:  
  - Sets the working directory inside the container to `/app`.  
  - All subsequent commands will execute relative to this directory.

---

### 3. `COPY package*.json ./`
- **What it does**:  
  - Copies `package.json` and `package-lock.json` (if they exist) from the local machine to the `/app` directory inside the container.  
  - These files are necessary for installing dependencies.

---

### 4. `RUN npm install`
- **What it does**:  
  - Installs all dependencies (both development and production) specified in `package.json`.  
  - The dependencies are placed in a `node_modules` directory within the container.

---

### 5. `COPY . .`
- **What it does**:  
  - Copies all files and directories from the local project root to the `/app` directory in the container.  
  - This includes source code, configuration files, and assets.

---

### 6. `RUN npm run build`
- **What it does**:  
  - Executes the `build` script defined in `package.json`.  
  - Compiles/transpiles source files (e.g., TypeScript, SCSS) into production-ready files, typically stored in a `dist` folder.

---

## **Stage 2: Production**

### 7. `FROM node:18-alpine AS production`
- **What it does**:  
  - Starts a new stage with a fresh `node:18-alpine` image.  
  - This creates a clean slate without unnecessary files from the builder stage, reducing the final image size.

---

### 8. `WORKDIR /app`
- **What it does**:  
  - Sets the working directory inside the production stage to `/app`.

---

### 9. `COPY --from=builder /app/dist ./dist`
- **What it does**:  
  - Copies the `dist` folder (containing the built application) from the **builder** stage into `/app/dist` in the production stage.  
  - Ensures only compiled code is included in the final image.

---

### 10. `COPY package*.json ./`
- **What it does**:  
  - Copies `package.json` and `package-lock.json` into the production stage.  
  - These files are required to install production dependencies.

---

### 11. `RUN npm install --only=production`
- **What it does**:  
  - Installs only the production dependencies specified in `package.json`.  
  - Excludes development dependencies to reduce image size.

---

### 12. `EXPOSE 3000`
- **What it does**:  
  - Declares that the application will listen on port `3000` during runtime.  
  - This is for documentation purposes; you still need to map the port when running the container (e.g., `docker run -p 3000:3000`).

---

### 13. `CMD ["npm", "run", "start"]`
- **What it does**:  
  - Specifies the command to run when the container starts.  
  - `npm run start` typically runs the production server (e.g., an Express.js app or static file server).

---

## **Summary of Workflow**
1. **Builder Stage**:
   - Prepares the application:
     - Installs dependencies.
     - Copies the source code.
     - Builds the project into a `dist` folder.
2. **Production Stage**:
   - Starts fresh with only the necessary runtime files (e.g., `dist` folder and production dependencies).
   - Configures the container to expose the application and run it in production mode.

---

## **Benefits of Multi-Stage Builds**
- **Smaller Image Sizes**:  
  The final image includes only the runtime files, excluding development dependencies and tools.

- **Improved Security**:  
  Development files and dependencies are excluded from the production image.

- **Modularity**:  
  Separates build and runtime environments, making the process more manageable.

- **Better Performance**:  
  Smaller images load faster, improving container deployment speed.
