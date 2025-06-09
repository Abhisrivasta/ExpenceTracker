import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./componets/Home"
import ShowEexpenses from './componets/ShowEexpenses'
import ShowTransactions from './componets/ShowTransactions'
import Earning from './componets/Earning'
import ThemeBtn from './componets/ThemeBtn'
import { ThemeProvider } from './context/themeContext'
import { useEffect, useState } from 'react'
import About from './componets/About'
import { ToastContainer } from 'react-toastify'
function App() {
    const[themeMode,setThemeMode] = useState("light");

    
   const toggleMode = ()=>{
    setThemeMode((prev: string) =>(prev === "light" ? "dark" : "light"))
   }

   useEffect(()=>{
    document.querySelector('html')?.classList.remove("light","dark")
    document.querySelector('html')?.classList.add(themeMode)
   },[themeMode])

  return (
  <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // or "dark" / "light"
      />
    <ThemeProvider value={{ themeMode, toggleMode }}>
      <ThemeBtn />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Show-expenses' element={<ShowEexpenses />} />
        <Route path='/show-transactions' element={<ShowTransactions />} />
        <Route path='/add-Earning' element={<Earning />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </ThemeProvider>
  </>
  )
}

export default App
