import { ItemsActionTypes } from "../consts";

const {
  LOADING_ITEMS,
  ERROR_ITEMS,
  ERROR_ITEM_BY_ID,
  GET_ITEMS,
  GET_ITEM_BY_ID,
} = ItemsActionTypes;

const initialState = {
  items: [],
  item_by_id: {},
  error: "",
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ITEMS:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case ERROR_ITEMS:
      return {
        ...state,
        error: action.payload,
        items: [],
        loading: false,
      };
    case ERROR_ITEM_BY_ID:
      return {
        ...state,
        error: action.payload,
        item_by_id: {},
        loading: false,
      };
    case GET_ITEMS:
      return {
        ...state,
        error: "",
        items: action.payload,
      };
    case GET_ITEM_BY_ID:
      return {
        ...state,
        error: "",
        item_by_id: action.payload,
      };
    default:
      return state;
  }
};

export const selectItems = (state) => state.items;
export const selectItemsLoading = (state) => state.loading;

export const selectItemById = (state) => state.item_by_id;
export const selectItemByIdLoading = (state) => state.loading;
