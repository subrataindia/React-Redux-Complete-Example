import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './redux/counterActions';
import Products from './components/products/ProductsContainer';

function App() {
  const dispatch = useDispatch();
  const no = useSelector((state) => state.counterReducer);
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(increment(2))}>+</button>
        {no}
        <button onClick={() => dispatch(decrement(2))}>-</button>
      </div>
      <Products />
    </div>
  );
}

export default App;
