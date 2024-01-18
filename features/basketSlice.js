import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const basketItems = state.items;
            const itemExist = basketItems?.find((item) => item?.id === action?.payload?.id);
            if (itemExist !== undefined) {
                const index = basketItems?.findIndex((item) => item?.id === action.payload.id);
                if (index !== -1) {
                    let temp = state.items[index];
                    temp = {...temp, quantity: temp.quantity + 1};
                    state.items[index] = temp;
                }
            }
            else {
                state.items = [...state.items, action.payload]
            }
        },
        removeFromBasket: (state, action) => {
            const basketItems = state.items;
            const itemExist = basketItems?.find((item) => item?.id === action?.payload?.id);
            if (itemExist !== undefined) {
                const index = basketItems?.findIndex((item) => item?.id === action.payload.id);
                if (index !== -1) {
                    let temp = state.items[index];
                    if (temp?.quantity > 0) {
                        temp = {...temp, quantity: temp.quantity - 1};
                        if (temp?.quantity === 0) {
                            let basketItems = state.items;
                            basketItems.splice(index, 1);
                            state.items = basketItems;
                        }
                        else {
                            state.items[index] = temp;
                        }
                    }
                    
                }
            }
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;

export const selectBasketTotalPrice = (state) => state.basket.items.reduce((total, item) => {
    total += item?.price * item?.quantity;
    return total;
}, 0);
export const selectBasketTotalQuantity = (state) => state.basket.items.reduce((total, item) => {
    total += item?.quantity;
    return total;
}, 0);

export const getSelectedItemQuantity = (state, id) => {
    const basketItems = state.basket.items;
    const selectedItem = basketItems?.find((item) => item.id === id);
    return selectedItem?.quantity !== undefined ? selectedItem?.quantity : 0;
}

export default basketSlice.reducer;

