import ReactDOM from 'react-dom/client'; // Use `ReactDOM.createRoot` for React 18
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path according to your store's location
import App from './App'; // Adjust the path according to your App component's location
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: if you're using Bootstrap

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Provide the Redux store */}
    <App />
  </Provider>
);
