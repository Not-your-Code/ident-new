import './App.css'

import Home from './Views/Home/Home'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import {  useNavigate , useHistory  } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    
     </Routes>
    </div>
    </Router>

  );
}

export default App;
