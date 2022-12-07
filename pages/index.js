import React, {useEffect} from 'react'
import  {mainLayout}  from '../components/MainLayout/mainLayout'
import Home from '../components/Home/home'


function Index() {


 const HomePage = mainLayout(Home)

  return (
    <HomePage />
  )
}

export default Index;