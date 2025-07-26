import React from 'react'
// import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'
import MenuBtn from './components/NavElement/MenuBtn'
import Footer from './components/Footer'




const App = () => {
  return (
    // p-3 lg:p-10
    <div className=' relative min-h-[100vh] w-[100%] bg-[#181817] outline outline-offset-2'>
      <MenuBtn/>
     
      {/* <Nav/> */}
      <Mainroutes/>
      <Footer/>
    </div>
  )
}

export default App

// bg -> #181817
// color -> #dcd8f6
// btn -> #e56138
// #f8f7ec
// #cdf0ff
// "VÉRITTÉ ROYAL"







