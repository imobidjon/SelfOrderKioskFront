import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChScreen from './Screens/ChooseScreen/ChScreen';
import Screen from './Screens/HomeScreen/Screen';
import PMScreen from './Screens/PayMethodScreem/PMScreen';
import OHScreen from './Screens/OrderHomeSreen/OHScreen';
import RScreen from './Screens/ReviewScreen/RScreen';
import CScreen from './Screens/CompleteScreen/CScreen';
import AdminScreen from './Screens/AdminScreen/AdminScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route Component={Screen} path='/' exact={'true'} />      
          <Route Component={ChScreen} path='/choose' exact={'true'} />      
          <Route Component={PMScreen} path='/paymethod' exact={'true'} />      
          <Route Component={OHScreen} path='/order' exact={'true'} />      
          <Route Component={OHScreen} path='/order' exact={'true'} />      
          <Route Component={OHScreen} path='/order' exact={'true'} /> 
          <Route Component={RScreen} path="/review"  exact={'true'} />
          <Route Component={CScreen} path="/complete"  exact={'true'} />

          {/* Admin Screen */}
          <Route Component={AdminScreen} path="/admin"  exact={'true'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
