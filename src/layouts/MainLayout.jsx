import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet /> {/* aquí se van intercambiando los hijos que son las pages */}
        <Footer />
    </>
  )
}

export default MainLayout
