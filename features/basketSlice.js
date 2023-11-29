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
                            state.items = [];
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

export default basketSlice.reducer;

