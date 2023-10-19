import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChScreen from './Screens/ChooseScreen/ChScreen';
import Screen from './Screens/HomeScreen/Screen';
import PMScreen from './Screens/PayMethodScreem/PMScreen';
import OHScreen from './Screens/OrderHomeSreen/OHScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route Component={Screen} path='/' exact={'true'} />      
          <Route Component={ChScreen} path='/choose' exact={'true'} />      
          <Route Component={PMScreen} path='/paymethod' exact={'true'} />      
          <Route Component={OHScreen} path='/order-home' exact={'true'} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
