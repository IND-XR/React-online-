# E-Commerce Application - Complete User Flow

## 🔐 Admin Credentials
- **Email:** admin123@gmail.com
- **Password:** admin@123

---

## 👥 USER FLOW (Regular Customer)

### 1. Sign Up
- User clicks "Sign up here" on login page
- Fills in: Name, Email, Password, Confirm Password
- **After Signup → Redirected to User Login page**

### 2. User Login
- User goes to Customer Login (or via signup redirect)
- Enters email & password
- **After Login → Redirected to /products page**
- Can view all products, search, filter, sort
- Can add products to cart ✅
- Can add products to wishlist ✅
- Can view cart and checkout
- **Cannot add/edit/delete products** ❌

---

## 🛡️ ADMIN FLOW

### 1. Admin Login
- Click "Admin Login"
- Enter credentials:
  - Email: `admin123@gmail.com`
  - Password: `admin@123`
- **After Login → Redirected to /admin-dashboard**

### 2. Admin Dashboard
- View all products in table format
- See total product count
- **Can Add Product** ✅
  - Click "Add New Product" button
  - Redirects to `/admin/CreateProduct`
  - Fill in product details
  
### 3. Manage Products
- **Edit Product** ✅ - Click Edit button → `/admin/UpdateProduct/:id`
- **Delete Product** ✅ - Click Delete button
- **View Details** ✅ - See product in table

---

## 📊 Database Structure (db.json)

### Users Table
```json
{
  "id": "unique-id",
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "isAdmin": false  // false = regular user, true = admin
}
```

### Products Table
```json
{
  "id": "product-id",
  "title": "Product Name",
  "price": 99.99,
  "description": "Product description",
  "category": "men's clothing",
  "image": "image-url",
  "stock": 10
}
```

---

## 🔗 Complete Navigation Map

```
Home/Login Choice
├── Admin Login
│   └── Admin Dashboard (if isAdmin = true)
│       ├── Add Product
│       ├── Edit Product
│       └── Delete Product
│
└── User Login/Signup
    ├── Sign Up (new user) → User Login
    └── User Login (existing user)
        └── Products Page
            ├── View Products
            ├── Add to Cart
            ├── Add to Wishlist
            ├── View Cart
            └── View Wishlist
```

---

## ✅ All Features Implemented

### Admin Can:
- ✅ Login with specific credentials
- ✅ Add new products
- ✅ Edit products
- ✅ Delete products
- ✅ View all products dashboard
- ✅ See product statistics

### Users Can:
- ✅ Sign up with email/password
- ✅ Login after signup
- ✅ View all products
- ✅ Search products
- ✅ Filter by category
- ✅ Sort by price/name
- ✅ Add to cart
- ✅ Add to wishlist
- ✅ Remove from cart
- ✅ View cart total (with tax)
- ✅ Cannot add/edit/delete products

---

## 🚀 How to Test

1. **Backend Running:** `cd backend && npm start` (port 3000)
2. **Frontend Running:** `cd frontend && npm run dev` (port 5173)

### Test Admin Flow:
1. Go to Admin Login
2. Enter: admin123@gmail.com / admin@123
3. Click "Sign In"
4. You'll see Admin Dashboard
5. Click "Add New Product" to create products

### Test User Flow:
1. Go to Sign Up
2. Create new account
3. You'll be redirected to User Login
4. Login with your credentials
5. Browse products, add to cart/wishlist
6. You won't have access to admin features
