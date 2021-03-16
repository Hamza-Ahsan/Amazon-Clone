export const initialState = {
    basket: [{
        id: 123445,
        title: 'The lean Book is very good for reading Purpose hsgdasjhdsa hjshdfjknhsjadf khkhfckhkshfsa',
        rating: 5,
        price: 11.5,
        image: 'https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg',
    },
    {
        id: 12433445,
        title: 'The lean Book is very good for reading Purpose hsgdasjhdsa hjshdfjknhsjadf khkhfckhkshfsa',
        rating: 5,
        price: 11.5,
        image: 'https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg',
    }
    ],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                user: action.user,
            }
        case "ADD_TO_BASKET":
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            // logic for Removing from basket

            // we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                // item exists in basket, remove it....
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its nothing`
                );
            }
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}


export default reducer;