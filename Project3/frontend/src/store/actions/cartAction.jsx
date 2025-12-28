import axios from "../../api/axiosconfig";

export const asyncaddtocart = (product) => async (dispatch, getState) => {
  try {
    const { cart } = getState();
    const existingItem = cart.items?.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      if (!cart.items) {
        cart.items = [];
      }
      cart.items.push({ ...product, quantity: 1 });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart.items));
    console.log("✅ Product added to cart");
  } catch (error) {
    console.log("Error adding to cart:", error);
  }
};

export const asyncremovefromcart = (id) => async (dispatch, getState) => {
  try {
    const { cart } = getState();
    const updatedCart = cart.items?.filter((item) => item.id !== id) || [];

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("✅ Product removed from cart");
  } catch (error) {
    console.log("Error removing from cart:", error);
  }
};

export const asyncclearcart = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("cart");
    console.log("✅ Cart cleared");
  } catch (error) {
    console.log("Error clearing cart:", error);
  }
};
