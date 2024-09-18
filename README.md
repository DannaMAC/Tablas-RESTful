# Tablas RESTful API

## Autor
Danna Mairbel Corral Salcedo 358147

Este proyecto implementa una API RESTful para realizar operaciones aritméticas básicas. La API proporciona los siguientes endpoints:

## Endpoints

### 1. Sumar dos números

- **Método:** `GET`
- **URL:** `/results/:n1/:n2`
- **Descripción:** Suma los dos números proporcionados en los parámetros de la URL.
- **Parámetros:**
  - `n1` (entero): Primer número a sumar.
  - `n2` (entero): Segundo número a sumar.
- **Respuesta:**
  - **Código 200 OK:** Devuelve el resultado de la suma en formato JSON.
  - **Ejemplo de Respuesta:**
    ```json
    {
      "result": 8
    }
    ```

### 2. Multiplicar dos números

- **Método:** `POST`
- **URL:** `/results/`
- **Descripción:** Multiplica los dos números proporcionados en el cuerpo de la solicitud.
- **Cuerpo de la Solicitud:**
  - **Formato JSON:**
    ```json
    {
      "n1": 3,
      "n2": 4
    }
    ```
- **Respuesta:**
  - **Código 200 OK:** Devuelve el resultado de la multiplicación en formato JSON.
  - **Ejemplo de Respuesta:**
    ```json
    {
      "result": 12
    }
    ```

### 3. Dividir dos números

- **Método:** `PUT`
- **URL:** `/results/`
- **Descripción:** Divide el primer número por el segundo número proporcionado en el cuerpo de la solicitud.
- **Cuerpo de la Solicitud:**
  - **Formato JSON:**
    ```json
    {
      "n1": 10,
      "n2": 2
    }
    ```
- **Respuesta:**
  - **Código 200 OK:** Devuelve el resultado de la división en formato JSON.
  - **Ejemplo de Respuesta:**
    ```json
    {
      "result": 5
    }
    ```

### 4. Potencia de un número

- **Método:** `PATCH`
- **URL:** `/results/`
- **Descripción:** Calcula la potencia del primer número elevado al segundo número proporcionado en el cuerpo de la solicitud.
- **Cuerpo de la Solicitud:**
  - **Formato JSON:**
    ```json
    {
      "n1": 2,
      "n2": 3
    }
    ```
- **Respuesta:**
  - **Código 200 OK:** Devuelve el resultado de la potencia en formato JSON.
  - **Ejemplo de Respuesta:**
    ```json
    {
      "result": 8
    }
    ```

### 5. Restar dos números

- **Método:** `DELETE`
- **URL:** `/results/:n1/:n2`
- **Descripción:** Resta el segundo número del primer número proporcionado en los parámetros de la URL.
- **Parámetros:**
  - `n1` (entero): Número del que se resta.
  - `n2` (entero): Número que se resta.
- **Respuesta:**
  - **Código 200 OK:** Devuelve el resultado de la resta en formato JSON.
  - **Ejemplo de Respuesta:**
    ```json
    {
      "result": 3
    }
    ```

## Requisitos

- Node.js
- Express.js

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DannaMAC/Tablas-RESTful.git
