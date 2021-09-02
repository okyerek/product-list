import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';

store.subscribe(()=> {
  // console.log(store.getState());
  try {
    const {products} = store.getState()
    const serializedState = JSON.stringify(products)
    if (serializedState){
      localStorage.setItem('products', serializedState)
    }
  }catch{

  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);