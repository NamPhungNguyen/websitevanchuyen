import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './redux/slides/rootReducer.js'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// Khôi phục trạng thái từ localStorage
const persistedState = localStorage.getItem('reduxState') 
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Khôi phục username từ localStorage
const username = localStorage.getItem('username');
if (username) {
    persistedState.auth = { ...persistedState.auth, username, isAuthenticated: true };
}

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ReactQueryDevtools /> {/* Include this line for development */}
    </QueryClientProvider>
  </React.StrictMode>,
);
