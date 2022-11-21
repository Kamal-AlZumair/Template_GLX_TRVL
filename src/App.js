import {Routes,Route} from 'react-router-dom'
import Contact from './Contact.jsx';
import Home from './Home.jsx'
import Pricing from './Pricing.jsx'
import Training from './Training.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/training' element={<Training/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
