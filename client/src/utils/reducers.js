import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type val is 'UPDATE_PRODUCTS', return a new state object with update products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // if action type is none of the above, do NOT update state
        default:
            return state;
    }
}

export function useProductReducer(initState) {
    return useReducer(reducer, initialState);
}
