import { Route, Routes } from 'react-router-dom';
import Header from '../components/layout/header/Header';
import MainPage from '../pages/mainPage/MainPage';
import Login from '../pages/loginPage/login/Login';
import Registration from '../pages/loginPage/registration/Registration';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<MainPage/>}/>
        </Route>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Registration/>}/>
      </Routes>
    </>
  );
}