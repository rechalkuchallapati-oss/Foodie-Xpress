# ⚙️ Backend Architecture

# Overview

The backend follows a layered architecture using Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL. Each layer has a dedicated responsibility to ensure scalability, maintainability, and testability.

---

# Backend Layers

```
Client

↓

Routes

↓

Controllers

↓

Services

↓

Repositories

↓

Prisma ORM

↓

PostgreSQL
```

---

# Folder Structure

```
src

├── config

├── routes

├── controllers

├── middleware

├── services

├── repositories

├── models

├── validations

├── utils

├── constants

├── prisma

└── server.ts
```

---

# Responsibilities

## Routes

Receive HTTP requests.

Example

/auth

/restaurants

/orders

---

## Controllers

Handle requests and responses.

Responsibilities

* Validate request
* Call service
* Return response

---

## Services

Contains business logic.

Examples

Authentication

Cart calculations

Coupon validation

Order placement

Payment verification

---

## Repositories

Database communication layer.

Responsibilities

* CRUD Operations
* Database Queries
* Prisma Interaction

---

## Middleware

Authentication

Authorization

Error Handling

Logging

Validation

Rate Limiting

---

## Config

Environment variables

Database

Cloudinary

JWT

Payment Gateway

---

## Validation

Zod validation schemas.

---

## Utils

Helper functions.

Examples

OTP Generator

Token Generator

Date Formatter

---

# Authentication Flow

```
Request

↓

JWT Verification

↓

Role Verification

↓

Controller

↓

Service

↓

Repository

↓

Database
```

---

# API Response Format

Success

```json
{
  "success": true,
  "message": "Request Successful",
  "data": {}
}
```

Error

```json
{
  "success": false,
  "message": "Something went wrong",
  "error": {}
}
```

---

# Security

JWT

Password Hashing

Role Authorization

Rate Limiting

Input Validation

Helmet

CORS

Environment Variables

---

# Future Scalability

* WebSockets
* Microservices
* Redis Cache
* Queue System
* Event-Based Notifications
