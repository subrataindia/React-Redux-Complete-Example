// It is also an action. When a redux action don't return object, it is handled by applyMiddleware.
// In this case the middleware is ReduxThunk

import {setProducts} from './productsActions';
import fakeStoreServices from '../fakeStoreServices';

export const fetchAllProductsThunk = () => {
  return async function (dispatch) {
    try {
      const products = await fakeStoreServices.getAllProducts();
      dispatch(setProducts(products));
    } catch (e) {}
  };
};
