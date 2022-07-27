import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Main.scss'

const Main = () => {
     const navigate = useNavigate()
     const [users, setUsers] = useState([])

     useEffect(() => {
          const fetchUser = async () => {
               const data = await axios.get('https://reqres.in/api/users')
               setUsers(data.data.data)
          }
          fetchUser()
     }, [])

     return (
          <main>
               <div className="cards flex flex-wrap mt-5">
                    {users.map(user => (
                         <div className="card" data-tilt data-tilt-scale="1.12" key={user.id}>
                              <img className='mx-auto mb-5' src={user?.avatar} alt="" />
                              <h2 className="name">{user?.first_name}</h2>
                              <button className="btn" onClick={() => navigate(`/user/${user.id}`)}>Full view</button>
                         </div>
                    ))}
               </div>
          </main>
     )
}

export default Main