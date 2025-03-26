# ECommerce Follow-Along Project

## Overview
This is a follow-along eCommerce project designed to help developers understand and implement core functionalities of an online store. The project includes user authentication, product listing, shopping cart management, order processing, and payment integration.

## Features
- **User Authentication**: Sign up, login, and logout functionalities.
- **Product Catalog**: Display a list of available products with details.
- **Shopping Cart**: Add, update, and remove products from the cart.
- **Order Processing**: Checkout process including order confirmation.
- **Payment Integration**: Connect with third-party payment gateways.
- **Admin Dashboard**: Manage products, orders, and users.

## Tech Stack
- **Frontend**: React.js (or HTML, CSS, JavaScript)
- **Backend**: Node.js with Express
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT-based authentication
- **Payment Gateway**: Stripe / PayPal

## Setup Instructions
### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- MongoDB/PostgreSQL (for database)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-follow-along.git
   ```
2. Navigate to the project folder:
   ```sh
   cd ecommerce-follow-along
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=your_database_url
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret
     ```
5. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Open `http://localhost:3000` in your browser.
- Register/Login as a user.
- Browse products and add them to the cart.
- Proceed to checkout and complete a dummy payment.
- (Admin) Manage products and orders via the dashboard.

## Contribution
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

# Milestone 1:
* Complete foundation for E-commerce Application

# Milestone 2:
* Separate folders for frontend and backend.
* A functional ligin page in the frontend.
* Complete setting for teilwind-Css.

# Milestone 3:
* Organized the **backend** for scalability.
* Connected the **server to MongoDB** using Mongoose.
* Implement **error-handling middleware** for API stability.

# Milestone 4:
* Create the **User model** in mongoose to define user data structure.
* develop the **User controller** to manegr user authentication(signup,login).
* Implemented **Multer for file handling** allowing user profile and product images uploads.

# Milestone 5: user Registration & file handling
* created the "signup page"  in react and added code for signup backend also.
* Added the "Signup page" validation in (signup,login).

# Milestone 6: Password Hashing by using Bcryptjs
* added the **password encryption** in backend signup page.
* added comparision for checking password is correct or not in login backend.

# Milestone 7:
### Overview
In Milestone 7, we focused on secure user login. This involved validating user credentials and verifying the encrypted password stored in the database to ensure safe and secure authentication.

# Milestone 8:
* Created the card component and Design a reusable card component with props for product details.
* Design the homepage layout and Set up a grid layout or flexbox for displaying multiple cards neatly.

# Milestone 9: **create a form for product upload**
* Created the **AddProducts** page in Frontend.
* Added form validations in AddProducts page.

# Milestone 10: **Created schema product upload**
* Created the **productRouter** page in Backend.
* Created the **productModel** in Backend.
* Handeled file uploads by multer inside middleware multer.

# Milestone 11: 
* created **home page** for dynamic products presentation.
* added the **backend** part for handeling products(created end points to get products).
* handeled file uploads by multer inside middleware multer.

# Milestone 12: **Showing product according to user**
* Created **home page** for dynamic products presentation according to user mail.
* added the **backend** for specific user products.

# Milestone 13: **Created product update**
* Created **Product Update Endpoint** for updating products.
* Created form for updating data in frontend and created autofil function.

# Milestone 14:
* Created **Product Delete Endpoint** for updating products.
* Created form for deleting data in frontend.







