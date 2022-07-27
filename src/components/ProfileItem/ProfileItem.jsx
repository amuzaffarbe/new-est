import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Header from '../Header/Header'

const ProfileItem = () => {
     const navigate = useNavigate()

     const [user, setUser] = useState([])
     const foundUser = localStorage.getItem('user')

     useEffect(() => {
          if (localStorage.getItem('token') === null) {
               window.location.href = '/signup'
          }
     }, [])

     useEffect(() => {
          const fetchUser = async () => {
               const data = await axios.get(`https://reqres.in/api/users/${foundUser}`)
               setUser(data.data.data)
          }
          fetchUser()
     }, [])
     return (
          <div>
               <Header />
               <div className="login-bg h-100 mt-2">
                    <div className="row d-flex justify-center w-full mx-auto">
                         <div className="col-md-7 mt-5 mx-auto w-full">
                              <p className='edit' onClick={() => navigate("/edit")}>Edit</p>
                              <div className="card p-3 py-4 w-full mx-auto">
                                   <div className="text-center">
                                        <img src={user?.avatar} width="300" className="rounded-circle mx-auto" />
                                   </div>
                                   <div className="text-left mt-3">
                                        <h5 className="white mt-2 mb-0">First name : {user?.first_name}</h5>
                                        <h5 className="white mt-2 mb-0">Last name : {user?.last_name}</h5>
                                        <span className='white'>Email : {user?.email}</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProfileItem