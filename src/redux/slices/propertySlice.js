import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProperties } from "../../api/property";

export const fetchProperties = createAsyncThunk("properties/fetch", async () => {
    return await getProperties();
});

const propertySlice = createSlice({
    name: "properties",
    initialState: { list: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProperties.pending, (state) => { state.loading = true; })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            });
    },
});

export default propertySlice.reducer;
