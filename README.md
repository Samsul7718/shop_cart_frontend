# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# 1.Project SetUp


### 1.1 Frontend

  1.1.1 Open another terminal and select the frontend create frontend file using vite

      npm create vite@latest "app-name"
      select react and javascript then press enter

  1.1.2 Now run the project 

         npm run dev
         
1.1.3 After that frontend should running properly.


# 2.Project Description

### Shop.Cart – E-Commerce Application
 

Shop.Cart is a full-stack e-commerce web application built using React (Vite) for the frontend and Express.js for the backend.
The project demonstrates how to build a shopping cart system with product listing, cart management, and order placement 
functionality — without using a database (products are hardcoded for simplicity).

This project is designed as a learning/demo project for practicing React, Context API, localStorage, and Express API integration.

### Features

1. Product Listing – Fetch products from an Express API and display them in React.

2. Shopping Cart – Add/remove products, adjust quantity, and view total price.

3. Persistence with LocalStorage – Cart items remain saved even after refreshing the page.

4. Global State Management – Context API used for managing cart and auth states.

5. Backend API – Simple Express server with endpoints:

6. GET /api/products → returns a list of products

7. POST /api/order → accepts a list of product IDs and quantities, logs order details, and returns a success message

8. UI/UX – Responsive layout using Tailwind CSS.

### Tech Stack

Frontend: React (Vite), Tailwind CSS

State Management: Context API + localStorage

Backend: Express.js (Node.js), CORS enabled

Tools: Git, npm

### Clone the repository

git clone https://github.com/Samsul7718/shop_cart_frontend.git


        

