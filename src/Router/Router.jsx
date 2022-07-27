import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SingUp from '../pages/SingUp';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProfileEdits from '../pages/ProfileEdits';
import UserItem from '../pages/UserItem';

const Router = () => {
     return (
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='/signup' element={<SingUp />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/user/:id' element={<UserItem />} />
               <Route path='/edit' element={<ProfileEdits />} />
          </Routes>
     )
}

export default Router