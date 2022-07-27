import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as uuid from 'uuid'

const SignUp = () => {
     const navigate = useNavigate()

     const [email , setEmail] = useState('')
     const [password , setPassword] = useState('')

     const handleSubmit = async event => {
          event.preventDefault();

          try {
               const requestData = {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         email: email,
                         password: password
                    })
               };

               const response = await fetch('https://reqres.in/api/register', requestData);
               const data = await response.json();

               if (data.error) {
                    alert(data.error)
               } else {
                    localStorage.setItem('user', data.id)
                    localStorage.setItem('token', data.token)
                    navigate('/')
               }

          } catch (error) {
               console.log(error);
          }
     }

     return (
          <div className="login-bg h-100">
               <div className="container mx-auto p-2">
                    <div className="max-w-lg mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
                         <div className="text-center mb-8">
                              <h1 className="font-bold text-2xl font-bold">Ro'yhatdan o'tish</h1>
                         </div>
                         <form action="https://reqres.in/api/register" method='POST'>
                              <div className="mt-5">
                                   <label htmlFor="username">Email</label>
                                   <input
                                        type="email"
                                        id="username"
                                        onChange={(event) => setEmail(event.target.value)}
                                        name='email'
                                        placeholder='johndoe@gmail.com'
                                        className="block w-full p-2 border rounded border-gray-500"
                                   />
                              </div>
                              <div className="mt-5">
                                   <label htmlFor="password">Password</label>
                                   <input
                                        type="password"
                                        id="password"
                                        name='password'
                                        onChange={(event) => setPassword(event.target.value)}
                                        placeholder='password'
                                        className="block w-full p-2 border rounded border-gray-500"
                                   />
                              </div>
                              <div className="mt-10">
                                   <input
                                        type="submit"
                                        onClick={handleSubmit}
                                        value="Login"
                                        className="py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                                   />
                              </div>
                              <div className="d-flex w-full">
                                   <p>Have an accaunt ?</p>
                                   <p className='navigate' onClick={() => navigate("/login")}>Login</p>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default SignUp