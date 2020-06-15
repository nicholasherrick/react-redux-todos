import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// We need these redux imports
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
// react router
import { BrowserRouter } from 'react-router-dom';

// Create store from rootReducer file and enable redux devtools
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    {/* Remember to wrap App in <Provider> tag and pass in store variable as prop */}
    <Provider store={store}>
      {/* Browser router goes inside of provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
