import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
     const navigate = useNavigate()
     const token = localStorage.getItem('token')
     const user = JSON.parse(localStorage.getItem(token))

     const logout = () => {
          localStorage.removeItem("token")
          localStorage.removeItem(token)
     }

     return (
          <>
               <div className="dark:bg-gray-900 p-5">
                    <div className="relative">
                         <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                              <div className="container mx-auto flex items-center justify-between">
                                   <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                                        <h1 className="text-lg" onClick={() => navigate("/")}>Logo</h1>
                                   </h1>
                                   <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                        <li>
                                             <NavLink to="/" className="dark:text-white p-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Home</NavLink>
                                        </li>

                                        <li>
                                             <NavLink to="/profile" className="dark:text-white p-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Profile</NavLink>
                                        </li>
                                   </ul>

                                   <div className="md:w-2/12 profile-info justify-end flex items-center space-x-4 xl:space-x-8">
                                        <div className="relative">
                                             <div className="right-0 flex w-full items-center pr-2">
                                                  <li>
                                                       <NavLink to="/login" onClick={() => logout()} className="text-white p-2 w-full text-white-800 focus:outline-none focus:ring-2 bg-red-700 rounded-lg focus:ring-gray-800 hover:underline">Log out</NavLink>
                                                  </li>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Header