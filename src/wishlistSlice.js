
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const { id } = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter(itemId => itemId !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
