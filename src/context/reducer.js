export const initialState = {
  basket: [
    {
      id: "1234assd",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries",
      price: 11.95,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
    },
    {
      id: "123df4",
      title:
        "The Lean Startup",
      price: 15.95,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
    },
    {
      id: "12sdfs34",
      title:
        "How Constant Innovation Creates Radically Successful Businesses by Eric Ries",
      price: 31.95,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
    }
  ],
  user: null,
};

export const getBasketTotal = (basket) => 
basket && basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket!!`
        );
      }
      return {
        ...state,
        basket: newBasket
      };

    default:
      return state;
  }
}

export default reducer;
