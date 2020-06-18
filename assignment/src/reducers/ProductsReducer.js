import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ..._.mapKeys(action.payload.products, "productId")
      };
    case "FETCH_PRODUCT":
      console.log(state, "state in reducer");
      return { state };

    default:
      return state;
  }
};
