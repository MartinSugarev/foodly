import React from 'react'
import  {mainLayout}  from '../src/components/MainLayout/mainLayout'
import Home from '../src/components/Home/home'


function Index() {



 const HomePage = mainLayout(Home)



  return (
    <HomePage  />
  )
}

export default Index;