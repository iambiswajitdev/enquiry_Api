import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
const __dirname = path.resolve();
const options = {
  definition: {
    openapi: "3.0.0", // OpenAPI version
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for my Node.js project",
    },
    servers: [
      {
        url: "http://localhost:8000/api/enquiry", // your API base URL
      },
    ],
  },
  // Path to the API docs (where your routes are defined)
  apis: ["./helper/swaggerRoutes.js"], // adjust path to your project
};

const swaggerSpec = swaggerJsDoc(options);

export function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📚 Swagger Docs available at http://localhost:${port}/api-docs`);
}
