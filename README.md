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

### **🛠️ Milestone 1: Laying the Foundation**  
✅ Initialized the project structure for both frontend and backend.  
✅ Installed necessary dependencies for React, Node.js, and Express.  
✅ Set up a basic server in **Node.js** using **Express.js**.  
✅ Configured **environment variables** for secure credentials.  

---

### **🛠️ Milestone 2: Structuring the Project & UI Setup**  
✅ **Separated frontend and backend folders** for modular development.  
✅ Created a **functional login page** in the frontend using React.js.  
✅ Installed and configured **Tailwind CSS** for responsive UI design.  

---

### **🛠️ Milestone 3: Backend Configuration & Database Connection**  
✅ Organized the **backend folder structure** for scalability.  
✅ Connected the **server to MongoDB** using Mongoose.  
✅ Implemented **error-handling middleware** for API stability.  

---

### **🛠️ Milestone 4: User Management & File Handling**  
✅ Created the **User Model** in Mongoose to define user data structure.  
✅ Developed the **User Controller** to manage user authentication (signup, login).  
✅ Implemented **Multer for file handling**, allowing user profile and product image uploads. 


### **🛠️ Milestone 5: User Registration & File Handling**  
✅ Created the **Sign up page** in React and added code for signup backend also.  
✅ Added the **Sign up page** validation in (signup, login).   


### **🛠️ Milestone 6: Password Hashing By Using Bcryptjs**  
✅ added the **password encryption**  in backend signup page.  
✅ added comparision for checking password is correct or not in login backend.  

### **🛠️ Milestone 7: Password Decrypt By Using Bcryptjs**  
✅ added the **Password authentication**  in backend login page.  
✅ Here we are first getting the hashed password from db serched by email and then comparing the input body password with hashed password by compare method in bcryptjs. 

### **🛠️ Milestone 8: Product Page In Frontend**  
✅ added the **Product Page**  in Frontend as a Homepage.  


### **🛠️ Milestone 9: Created Form For Product Upload**  
✅ Created the **AddProducts** page  in Frontend.  
✅ Added form validation in AddProducts page.

### **🛠️ Milestone 10: Created Schema Product Upload** 
✅ Created **ProductModel** in backend.
✅ Created the **productRouter** page  in Backend.  
✅ Handeled file uploads by multer inside middleware multer.

### **🛠️ Milestone 11: Created Homepage For Product** 
✅ Created **Home Page** for dynamic products presentation.
✅ added the **backend** part for handeling products (created endpoint to get products).  

### **🛠️ Milestone 12: Showing product according to user** 
✅ Created **Product Page** for dynamic products presentation according to user mail.
✅ Created backend for specific user products. 

### **🛠️ Milestone 13: Created Product Update** 
✅ Created **Product Update Endpoint** for Updating products.
✅ Created form for updating data in frontend and created autofill function.

### **🛠️ Milestone 14: Created Product Delete** 
✅ Created **Product Delete Endpoint** for Updating products.
✅ Created form for Deleting product in frontend.

### **🛠️ Milestone 15: Created NavBar** 
✅ Created **Navigation Bar** for Navigating between pages.

### **🛠️ Milestone 16: Created ProductDetails Page** 
✅ Created **Product Details** for showing full product details in details page.
✅ Added Add to cart button with quantity selection.

### **🛠️ Milestone 17: CRUD for cart** 
✅ Created end backend ***CRUD*** for handling cart.
✅ handle quantity for producct in cart.

### **🛠️ Milestone 18: Frontend for cart page** 
✅ Created cart page in frontend.
✅ Handled cart operations from frontend.

### **🛠️ Milestone 19: Backend endpoint for cart item quantity** 
✅ Created put request for updating quantity for cart item.

### **🛠️ Milestone 20: Backend endpoint for UserDetailsrt** 
✅ Created endpoint for userDetais in backend.
✅ Created User.jsx for user details in frontend.

### **🛠️ Milestone 21: Created frontend for Address** 
✅ Created route for Add Address Page in Frontend.
✅ Create form for adding address.
✅ stored address using useState Hook.

### **🛠️ Milestone 22: Created backend for Address and attach with frontend** 
✅ Created backend endpoint for handeling address.
✅ Created backend endpoint with frontend.

### **🛠️ Milestone 23: worked on address in frontend and backend** 
✅ Created placeorder button in cart page and added navigation to select address.
✅ Create select address page and provided option to select one address.
✅ Created backend endpoint to sent all address to user.

### **🛠️ Milestone 24: worked on address in frontend and backend** 
✅ Displayed all of products in cart.
✅ Displayed all address in address section page.
✅ Diplayed total price in cart
✅ Added place order button at the button.

### **🛠️ Milestone 25: Worked on order backend and mail service
✅ ⁠Created *endpoint for order*.
✅ Implemented *mail service* for nodemailer.
✅ ⁠Handled *address* for delivery.

### **🛠️ Milestone 26: Worked on order backend and mail service
✅ Implemented mail with nodemailer.
✅ Sending order details to user via mail.

### **🛠️ Milestone 27: Worked on frontend for my order page.
✅ Created GET request to get request my order.

### **🛠️ Milestone 28: Created Order page in frontend**
✅Added cancel button in my-orders and create an backend endpoint for cancel order.

