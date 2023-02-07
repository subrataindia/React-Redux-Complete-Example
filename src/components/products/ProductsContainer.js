import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {fetchAllProducts} from '../../redux/productsActions';
import {fetchAllProductsThunk} from '../../redux/productsThunk';
import ProductsComponent from './ProductsComponent';

function ProductsContainer() {
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  console.log('Products', products);
  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, []);
  return <ProductsComponent products={products} />;
}

export default ProductsContainer;
