function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter((el) => el.id !== action.payload.id);
    }
}
export default reducer;
