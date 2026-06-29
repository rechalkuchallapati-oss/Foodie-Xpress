# 🏗️ Frontend Architecture

# Overview

The frontend of FoodieXpress is built using React, TypeScript, Vite, and Tailwind CSS following a scalable, feature-based architecture. The architecture focuses on modularity, maintainability, reusability, and performance.

The application follows a layered architecture where presentation, business logic, API communication, and state management are separated into dedicated modules.

---

# Frontend Layers

```
Presentation Layer
        │
        ▼
Component Layer
        │
        ▼
State Management Layer
        │
        ▼
API Service Layer
        │
        ▼
Backend REST APIs
```

---

# Application Architecture

```
App

│

├── Providers

│

├── Router

│

├── Layouts

│

├── Pages

│

├── Features

│

├── Components

│

├── Hooks

│

├── Services

│

├── Redux Store

│

├── Utilities

│

└── Assets
```

---

# Folder Responsibilities

## App

Application entry point.

Responsibilities

* Providers
* Global styles
* Routing initialization

---

## Layouts

Contains reusable layouts.

Examples

* Main Layout
* Dashboard Layout
* Authentication Layout

---

## Pages

Represents complete screens.

Examples

* Home
* Restaurants
* Login
* Cart
* Checkout

---

## Features

Contains feature-specific logic.

Examples

Authentication

Cart

Restaurant

Orders

Reviews

Profile

---

## Components

Reusable UI components.

Examples

Button

Input

Navbar

Footer

Modal

Food Card

Restaurant Card

Toast

Loader

---

## Hooks

Reusable React hooks.

Examples

useAuth

useCart

useTheme

useDebounce

usePagination

---

## Services

API communication layer.

Responsibilities

* Axios instance
* API requests
* Error handling
* Authentication headers

---

## Redux

Global state management.

Modules

Authentication

Cart

User

Theme

Notifications

Orders

---

## Utilities

Helper functions.

Examples

Currency formatting

Date formatting

Validation

Local Storage

Constants

---

## Assets

Images

Icons

Fonts

Illustrations

Animations

---

# Component Architecture

```
Page

↓

Section

↓

Component

↓

Sub Component

↓

Reusable UI
```

Example

```
Home Page

↓

Popular Restaurants Section

↓

Restaurant Card

↓

Rating Badge

↓

Icon
```

---

# State Management

Global State

* User
* Cart
* Theme
* Notifications

Local State

* Form inputs
* Modal visibility
* Dropdown state

Server State

* Restaurant List
* Menu
* Orders
* Reviews

---

# Routing Structure

Public Routes

* Landing
* Login
* Register
* Restaurant Details

Protected Routes

* Home
* Cart
* Checkout
* Profile
* Orders

Admin Routes

* Dashboard
* Users
* Restaurants

Restaurant Routes

* Dashboard
* Menu
* Analytics

Delivery Routes

* Active Orders
* Earnings

---

# Performance Strategy

* Lazy Loading
* Code Splitting
* Memoization
* Image Optimization
* Suspense
* Skeleton Loading
* API Caching

---

# Design Principles

* Single Responsibility
* Component Reusability
* Feature Isolation
* Clean Code
* Accessibility
* Mobile First
* Performance Optimized
