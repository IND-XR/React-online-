# 🎯 Quick Reference - E-Commerce System

## 🔐 Admin Credentials
```
Email: admin123@gmail.com
Password: admin@123
```

---

## 📍 Key Routes

| Route | Purpose | User Type |
|-------|---------|-----------|
| `/` | Home page | All |
| `/products` | Browse products | Users |
| `/cart` | Shopping cart | Users |
| `/wishlist` | Saved items | Users |
| `/admin-login` | Admin login page | Admin |
| `/admin-dashboard` | Admin panel | Admin |
| `/admin/CreateProduct` | Add product | Admin |
| `/admin/UpdateProduct/:id` | Edit product | Admin |
| `/product-detail/:id` | Product details | All |
| `/user-login` | User login | Users |
| `/Signup` | User registration | Users |

---

## 🎯 Main Features

### Admin Features
- ✅ Login with email/password
- ✅ View all products in table
- ✅ Create new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ View product details

### User Features
- ✅ Login/Signup
- ✅ Browse products
- ✅ Search products
- ✅ Filter by category
- ✅ Sort by price
- ✅ Add to cart
- ✅ Add to wishlist
- ✅ Manage cart (add, remove, update qty)
- ✅ Manage wishlist
- ✅ View cart total with tax

---

## 🔄 Redux Store Structure

```
store/
├── user: { user: {...}, isAuthenticated: boolean }
├── product: { products: [...] }
├── cart: { items: [...], carts: [...] }
└── wishlist: { items: [...] }
```

---

## 📦 Components to Note

### New Files Created
- `/pages/user/Cart.jsx` - Cart page with full management
- `/pages/user/Wishlist.jsx` - Wishlist page

### Updated Files
- `/pages/Products.jsx` - Enhanced with cart/wishlist features
- `/store/reducers/cartSlice.jsx` - Better quantity handling
- `/store/actions/cartAction.jsx` - Cart async actions
- `/routes/Mainroute.jsx` - Added cart/wishlist routes
- `/backend/db.json` - Admin credentials updated

---

## 🛠️ Common Tasks

### Add Product to Cart
```javascript
dispatch(addToCart(productObject));
```

### Remove from Cart
```javascript
dispatch(removeFromCart(productId));
```

### Add to Wishlist
```javascript
dispatch(addToWishlist(productObject));
```

### Remove from Wishlist
```javascript
dispatch(removeFromWishlist(productId));
```

### Check if in Cart
```javascript
cartItems.find((item) => item.id === productId)?.quantity || 0
```

### Check if in Wishlist
```javascript
wishlist.some((item) => item.id === productId)
```

---

## 🎨 Styling Reference

### Primary Colors
- Blue: `from-blue-500 to-indigo-600`
- Red/Pink: `bg-red-500`
- Green: `bg-green-500`
- Gray: `bg-gray-50/100/200/300`

### Common Classes
- Card: `bg-white rounded-2xl shadow-lg`
- Button: `px-6 py-3 rounded-lg transition-all duration-200`
- Grid: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Header: `text-4xl font-bold text-gray-900 mb-4`

---

## 📱 Responsive Breakpoints

- Mobile: `sm` (640px+)
- Tablet: `md` (768px+)
- Desktop: `lg` (1024px+)
- Large: `xl` (1280px+)

---

## 🔍 Debugging Tips

### Check Cart Items
```javascript
console.log(useSelector((state) => state.cart?.items))
```

### Check User Authentication
```javascript
console.log(useSelector((state) => state.user?.user))
```

### Check Products Loaded
```javascript
console.log(useSelector((state) => state.product?.products))
```

---

## 📊 Database Schema

### Users Table
```json
{
  "id": "unique-id",
  "name": "User Name",
  "email": "user@email.com",
  "password": "hashed-password",
  "isAdmin": false
}
```

### Products Table
```json
{
  "id": "unique-id",
  "title": "Product Name",
  "price": 99.99,
  "description": "Description",
  "category": "Category",
  "image": "image-url",
  "stock": 10
}
```

---

## ⚡ Performance Tips

1. Use `React.memo()` for product cards
2. Implement pagination for product list
3. Lazy load product images
4. Use `useCallback` for handlers
5. Debounce search input
6. Cache API responses

---

## 🐛 Common Issues & Solutions

### Issue: Cart not updating
**Solution**: Ensure Redux dispatch is called and state is properly updated

### Issue: Wishlist not showing items
**Solution**: Check if wishlist reducer is properly configured in store

### Issue: Admin login failing
**Solution**: Verify email is `admin123@gmail.com` and password is `admin@123`

### Issue: Products not loading
**Solution**: Ensure JSON Server is running on port 3000 and `/products` endpoint exists

---

## 📚 Files Modified Count
- **4 files updated**
- **3 files created**
- **1 database updated**

Total: **8 files changed**

---

## 🎉 You're All Set!

Your e-commerce system is fully functional and ready to use. Start by:
1. Running your JSON Server
2. Logging in as admin or user
3. Testing all features
4. Customizing as needed

**Happy coding! 🚀**
