import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
