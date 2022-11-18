
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {AddUser} from '../src/components/user/AddUser'
import {AllUser} from '../src/components/user/AllUser'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/header/Header';
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
    <Routes>
      <Route exact path='/' element={<AddUser/>}/>
      <Route exact path='/alluser' element={<AllUser/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
