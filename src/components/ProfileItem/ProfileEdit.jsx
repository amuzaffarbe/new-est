import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../Header/Header'

const ProfileItem = () => {
     const navigate = useNavigate()
     const foundUser = localStorage.getItem('user')

     const updateUser = (e) => {
          e.preventDefault()
          alert("User yangilandi")
          window.location.href = '/'
     }

     return (
          <div>
               <Header />
               <div className="login-bg h-100 mt-2">
                    <div className="row d-flex justify-center w-full mx-auto">
                         <div className=" col-md-7 mx-auto w-full">
                              <p className='edit' onClick={() => navigate("/profile")}>Back</p>
                              <div className="card-item bg-white card p-3 py-4 w-full mx-auto">
                                   <form action={`https://reqres.in/api/users/${foundUser}`} method="PUT">
                                        <div className="mt-5">
                                             <label htmlFor="username">First name</label>
                                             <input
                                                  type="text"
                                                  id="username"
                                                  name='first_name'
                                                  className="block w-full p-2 border rounded border-gray-500"
                                             />
                                        </div>
                                        <div className="mt-5">
                                             <label htmlFor="username">Last name</label>
                                             <input
                                                  type="text"
                                                  id="username"
                                                  name='last_name'
                                                  className="block w-full p-2 border rounded border-gray-500"
                                             />
                                        </div>
                                        <div className="mt-5">
                                             <label htmlFor="username">Email</label>
                                             <input
                                                  type="email"
                                                  id="username"
                                                  name='email'
                                                  className="block w-full p-2 border rounded border-gray-500"
                                             />
                                        </div>
                                        <div className="mt-5">
                                             <label htmlFor="username">Avatar</label>
                                             <input
                                                  type="text"
                                                  id="username"
                                                  name='email'
                                                  className="block w-full p-2 border rounded border-gray-500"
                                             />
                                        </div>
                                        <div className="mt-10">
                                             <input
                                                  type="submit"
                                                  onClick={updateUser}
                                                  value="Login"
                                                  className="py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                                             />
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProfileItem