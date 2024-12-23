// http://localhost:8081/v3/api-docs

{
  "openapi": "3.0.1",
  "info": {
    "title": "OpenAPI definition",
    "version": "v0"
  },
  "servers": [
    {
      "url": "http://localhost:8081",
      "description": "Generated server url"
    }
  ],
  "paths": {
    "/api/todos/{id}": {
      "put": {
        "tags": [
          "todo-controller"
        ],
        "operationId": "updateTodo",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Todo"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "todo-controller"
        ],
        "operationId": "deleteTodo",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/todos": {
      "get": {
        "tags": [
          "todo-controller"
        ],
        "operationId": "getTodos",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Todos"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "todo-controller"
        ],
        "operationId": "addTodo",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Todo"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Todo"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Todo": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "title": {
            "type": "string"
          },
          "completed": {
            "type": "boolean"
          }
        }
      },
      "Todos": {
        "type": "object",
        "properties": {
          "todos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Todo"
            }
          }
        }
      }
    }
  }
}