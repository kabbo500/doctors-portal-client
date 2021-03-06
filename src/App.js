import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Home/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import SingUp from './pages/Login/SingUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';


function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}>

        </Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={
            <RequireAdmin><Users></Users></RequireAdmin>
          }></Route>
        </Route>
        <Route path='/signUp' element={<SingUp></SingUp>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
