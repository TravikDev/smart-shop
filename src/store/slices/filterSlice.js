import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
        title: "popular +", 
        sort: "rating", 
        order: "desc",
    },
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log(action);
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
            
        }
    }
})

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;