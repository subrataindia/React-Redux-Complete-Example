import {takeEvery, call, put} from 'redux-saga/effects';
import fakeStoreServices from '../fakeStoreServices';
//import {setProducts} from './productsActions';
import {setProducts} from './productsSlice';

function* fetchAllProductsSagaFunction() {
  try {
    const products = yield call(fakeStoreServices.getAllProducts); // pass function reference. Don't use ().
    yield put(setProducts(products));
  } catch (e) {}
}

// This generator function can't be arrow function
export function* fetchAllProductsSaga() {
  //  yield takeEvery('FETCH_ALL_PRODUCTS', fetchAllProductsSagaFunction);
  yield takeEvery('products/fetchAllProducts', fetchAllProductsSagaFunction);
}
