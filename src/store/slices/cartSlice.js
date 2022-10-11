import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart (state, action) {
            const item = state.items.find(obj => obj.id === action.payload.id)
            if (item) item.count++
            else { state.items.push({
                ...action.payload, count: 1
            }) 
        }

        state.total = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum;
        }, 0)
        },
        removeFromCart (state, action) {
            const items = state.items.filter(obj => obj.id !== action.payload)
            const deletedItem = state.items.find(obj => obj.id === action.payload)
            state.total -= (deletedItem.price * deletedItem.count)
            state.items = items
            
        },
        decreaseCount (state, action) {
            const item = state.items.find(obj => obj.id === action.payload)
            if(item.count > 1) { 
                item.count--;
                state.total -= item.price
            }
            else (alert("Ну, пожалуйста, купи хотябы один смартфон"))
        }
    }
})

export const {addToCart, removeFromCart, decreaseCount} = cartSlice.actions

export default cartSlice.reducer