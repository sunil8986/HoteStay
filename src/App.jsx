import React from 'react'
import Header from './components/Header'
import { useLocation } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes.jsx'
import Home from './pages/home/Home.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const location = useLocation();
  const isOwnerPage = location.pathname.includes("owner");

  return (
    <>
      {
        !isOwnerPage && <Header />
      }
      <AllRoutes/>
      <Footer />
    </>
  )
}

export default App
