import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CreateForm from './Components/CreateForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserList from './Components/UserList';
import EditUser from './Components/EditUser';
import SpecificDta from './Components/SpecificDta';
function App() {
  return (
    <div className="App" style={{backgroundColor:'gray'}}>
      <BrowserRouter>
      <Navbar/>
<Routes>
      <Route exact   path='/' element={<CreateForm/>}/>
      <Route exact   path='/userlist' element={<UserList/>}/>
      <Route exact   path='/Edituserlist/:id' element={<EditUser/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
