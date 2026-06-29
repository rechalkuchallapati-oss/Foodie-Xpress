# 🔌 FoodieXpress API Planning

## Authentication APIs

POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

POST /api/auth/google

POST /api/auth/send-otp

POST /api/auth/verify-otp

POST /api/auth/forgot-password

POST /api/auth/reset-password

GET /api/auth/profile

PUT /api/auth/profile

---

## Restaurant APIs

GET /api/restaurants

GET /api/restaurants/:id

POST /api/restaurants

PUT /api/restaurants/:id

DELETE /api/restaurants/:id

GET /api/restaurants/search

GET /api/restaurants/popular

GET /api/restaurants/nearby

---

## Food APIs

GET /api/foods

GET /api/foods/:id

GET /api/foods/search

GET /api/foods/category/:id

POST /api/foods

PUT /api/foods/:id

DELETE /api/foods/:id

---

## Category APIs

GET /api/categories

POST /api/categories

PUT /api/categories/:id

DELETE /api/categories/:id

---

## Cart APIs

GET /api/cart

POST /api/cart

PUT /api/cart

DELETE /api/cart

DELETE /api/cart/item/:id

---

## Order APIs

POST /api/orders

GET /api/orders

GET /api/orders/:id

PUT /api/orders/:id

DELETE /api/orders/:id

GET /api/orders/history

---

## Payment APIs

POST /api/payment/create-order

POST /api/payment/verify

GET /api/payment/history

---

## Review APIs

POST /api/reviews

GET /api/reviews

PUT /api/reviews/:id

DELETE /api/reviews/:id

---

## Wishlist APIs

GET /api/wishlist

POST /api/wishlist

DELETE /api/wishlist/:id

---

## Coupon APIs

GET /api/coupons

POST /api/coupons/apply

---

## Notification APIs

GET /api/notifications

PUT /api/notifications/read

DELETE /api/notifications/:id

---

## Address APIs

GET /api/address

POST /api/address

PUT /api/address/:id

DELETE /api/address/:id

---

## Restaurant Dashboard APIs

GET /api/dashboard/orders

GET /api/dashboard/revenue

GET /api/dashboard/customers

GET /api/dashboard/menu

---

## Admin APIs

GET /api/admin/users

GET /api/admin/restaurants

GET /api/admin/orders

GET /api/admin/reports

GET /api/admin/analytics

---

## Delivery APIs

GET /api/delivery/orders

PUT /api/delivery/status

GET /api/delivery/history

GET /api/delivery/earnings

---

# Future APIs

GET /api/ai/recommendations

POST /api/group-order

POST /api/meal-builder

POST /api/voice-order

POST /api/image-search
