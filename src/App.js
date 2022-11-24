import React , {createContext, useContext, useEffect, useState}from 'react'
import { Route, Routes } from 'react-router-dom';
import { BookDetail } from './BookDetail';
import img1 from './image/night-mode.png'
import { LandingPage } from './LandingPage'
export  const contextData=createContext()
export  const contextSearchData=createContext()
export const ContextTheame=createContext()
function App() {
  const[BookDetail1,setBookDetail1]=useState([])
  const[detail,setDetail]=useState([])
  const[theme,setTheme]=useState()
  const[val,setval]=useState(true)
  const Themelogo=()=>{
   if(val===true){
    setTheme({backgroundColor:"rgb(208, 200, 200)",color:"black"})
    setval(false)
   }
   else{
    setTheme()
    setval(true)
   }
  }
  return (
   
    <div style={theme} className="App">
       <contextData.Provider value={{BookDetail1,setBookDetail1 }}>
       <contextSearchData.Provider value={{detail,setDetail}}>
        <ContextTheame.Provider value={{theme,setTheme}}>
        <div className="flex">
      <h2 className="heading">Welcome to my Library</h2>
      <img value={val} onClick={Themelogo} className="themeimg" src={img1} alt="" />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/BookDetail' element={<BookDetail/>}></Route>
      </Routes>
      </ContextTheame.Provider>
      </contextSearchData.Provider>
      </contextData.Provider>
      </div>
  )
}
export default App;

