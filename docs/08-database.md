# 🗄️ FoodieXpress Database Planning

## Database Overview

FoodieXpress follows a relational database architecture using PostgreSQL and Prisma ORM.

The system is divided into logical modules for better scalability and maintainability.

---

# Core Entities

## User

Stores customer information.

Fields

* User ID
* Name
* Email
* Password
* Phone Number
* Profile Picture
* Role
* Status
* Created At
* Updated At

---

## Restaurant

Stores restaurant information.

Fields

* Restaurant ID
* Owner ID
* Restaurant Name
* Description
* Address
* Contact Number
* Cuisine Type
* Opening Hours
* Rating
* Delivery Fee
* Status

---

## Food Category

Examples

* Pizza
* Burgers
* Desserts
* Beverages

Fields

* Category ID
* Restaurant ID
* Category Name
* Display Order

---

## Food Item

Fields

* Food ID
* Category ID
* Restaurant ID
* Name
* Description
* Price
* Discount Price
* Image
* Ingredients
* Calories
* Preparation Time
* Availability
* Rating

---

## Cart

Fields

* Cart ID
* User ID
* Total Price
* Total Quantity

---

## Cart Item

Fields

* Cart Item ID
* Cart ID
* Food ID
* Quantity
* Notes

---

## Address

Fields

* Address ID
* User ID
* Address Line
* Landmark
* City
* State
* Pincode
* Latitude
* Longitude

---

## Order

Fields

* Order ID
* User ID
* Restaurant ID
* Delivery Partner ID
* Payment ID
* Address ID
* Total Amount
* Delivery Charge
* Platform Fee
* Discount
* GST
* Order Status
* Estimated Delivery Time

---

## Order Item

Fields

* Order Item ID
* Order ID
* Food ID
* Quantity
* Price

---

## Payment

Fields

* Payment ID
* User ID
* Order ID
* Method
* Amount
* Transaction ID
* Status

---

## Review

Fields

* Review ID
* User ID
* Restaurant ID
* Food ID
* Rating
* Comment

---

## Wishlist

Fields

* Wishlist ID
* User ID
* Food ID
* Restaurant ID

---

## Notification

Fields

* Notification ID
* User ID
* Title
* Message
* Type
* Status

---

## Delivery Partner

Fields

* Delivery Partner ID
* Name
* Phone
* Vehicle Type
* Status
* Rating
* Earnings

---

## Coupon

Fields

* Coupon ID
* Code
* Discount Type
* Discount Value
* Expiry Date
* Minimum Order Value

---

# Entity Relationships

User

↓

Address

↓

Cart

↓

Order

↓

Payment

↓

Review

Restaurant

↓

Categories

↓

Food Items

↓

Orders

Delivery Partner

↓

Assigned Orders

Admin

↓

Restaurants

↓

Users

↓

Reports

---

# Future Database Modules

* Loyalty Points
* AI Recommendation History
* Nutrition Tracking
* Group Orders
* Meal Builder
* Restaurant Stories
* Voice Orders
