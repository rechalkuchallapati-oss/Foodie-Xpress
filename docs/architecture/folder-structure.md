# 📁 FoodieXpress Folder Structure

```
foodie-xpress/

├── apps/
│
│   ├── client/
│   │
│   ├── server/
│   │
│   ├── admin/
│   │
│   └── delivery/
│
├── packages/
│
│   ├── ui/
│   ├── config/
│   ├── types/
│
├── docs/
│
├── assets/
│
├── .github/
│
├── package.json
│
└── README.md
```

---

# Client Structure

```
client/

src/

├── app/

├── assets/

├── animations/

├── components/

│   ├── common/

│   ├── layout/

│   ├── forms/

│   ├── cards/

│   ├── modals/

│   ├── loaders/

│   ├── dashboard/

│   └── ui/

├── features/

│   ├── auth/

│   ├── restaurants/

│   ├── foods/

│   ├── cart/

│   ├── orders/

│   ├── profile/

│   ├── reviews/

│   └── notifications/

├── hooks/

├── layouts/

├── pages/

├── routes/

├── services/

├── store/

├── styles/

├── types/

├── utils/

└── main.tsx
```

---

# Server Structure

```
server/

src/

├── config/

├── controllers/

├── middleware/

├── routes/

├── services/

├── repositories/

├── validations/

├── prisma/

├── utils/

├── constants/

└── server.ts
```

---

# Future Monorepo Packages

## ui

Reusable components shared across apps.

---

## config

Shared configuration.

---

## types

Shared TypeScript interfaces.

---

# Development Standards

Naming

* PascalCase → Components
* camelCase → Variables
* kebab-case → Folders
* UPPER_CASE → Constants

---

# Git Branch Strategy

main

↓

develop

↓

feature/navbar

↓

feature/auth

↓

feature/cart

↓

feature/orders

↓

feature/dashboard
