import React, { createContext, useContext } from 'react';
import { useProduct, Reducer, useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: ''
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider , useStoreContext };
