import NavBar from './Component/NavBar';
// import AllUsers from './Component/AllUsers';
// import AddUser from './Component/AddUser';
// import EditUser from './Component/EditUser';
import NotFound from './Component/NotFound'; 
import AllTicket from './Component/AllTicket';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AllTicket />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/singUp" element={<SignUp />} />
        {/* <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} /> */}
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
