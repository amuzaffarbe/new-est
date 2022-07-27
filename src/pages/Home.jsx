import React, { useEffect } from 'react'

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const Home = () => {

     useEffect(() => {
          if (localStorage.getItem('token') === null) {
               window.location.href = '/signup'
          }
     }, [])

     return (
          <>
               <Header />
               <Main />
          </>
     )
}

export default Home