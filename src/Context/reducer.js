export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEAM: "SET_FOOD_ITEAM",
  SET_CART_SHOW: "SET_CART_SHOW",
};
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD_ITEAM:
      return {
        ...state,
        footiteam: action.footiteam,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        footiteam: action.footiteam,
      };
    default:
      return state;
  }
};
export default reducer;
