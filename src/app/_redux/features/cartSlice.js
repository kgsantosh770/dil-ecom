import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0,
}

const calculateSubtotal = (price, quantity) => {
    const total =  parseFloat(price) * parseFloat(quantity);
    return total;
};

const addToCart = (state, product) => {
    state.products.push({ ...product });
    const productTotal = calculateSubtotal(product.price, product.quantity);
    state.total += productTotal;
};

const removeFromCart = (state, productId) => {
    const product = state.products.find((p) => p.id === productId);
    const productTotal  = calculateSubtotal(product.price, product.quantity);
    state.products = state.products.filter((p) => p.id !== productId);
    state.total -= productTotal;
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => { addToCart(state, action.payload) },
        remove: (state, action) => { removeFromCart(state, action.payload) },
        removeAll: () => initialState,
    }
})

export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;