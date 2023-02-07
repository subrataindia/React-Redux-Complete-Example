import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllProducts} from '../../redux/productsActions';
import ProductsComponent from './ProductsComponent';

function ProductsContainer() {
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  console.log('Products', products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return <ProductsComponent products={products} />;
}

export default ProductsContainer;
