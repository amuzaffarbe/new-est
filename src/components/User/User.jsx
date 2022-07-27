import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../Header/Header'

const User = () => {
     const { id } = useParams()
     const [user, setUser] = useState([])

     useEffect(() => {
          const fetchUser = async () => {
               const data = await axios.get(`https://reqres.in/api/users/${id}`)
               console.log(data.data)
               setUser(data.data.data)
          }
          fetchUser()
     }, [])
     return (
          <div className=''>
               <Header />
               <div className="login-bg h-100 mt-2">
                    <div className="row d-flex justify-center w-full mx-auto">
                         <div className="col-md-7 mx-auto mt-5 w-full">
                              <div className="card p-3 py-4 mt-5 w-full mx-auto">
                                   <div className="text-center">
                                        <img src={user?.avatar} width="300" className="rounded-circle mx-auto" />
                                   </div>
                                   <div className="text-left mt-3">
                                        <h5 className="white mt-2 mb-0">First name : {user?.first_name}</h5>
                                        <h5 className="white mt-2 mb-0">Last name: {user?.last_name}</h5>
                                        <span className="white">Email : {user?.email}</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default User