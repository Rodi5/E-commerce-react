import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  total: 0,
};

const calculateTotals = (items) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;
  return { subtotal, total };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },
    clearItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
