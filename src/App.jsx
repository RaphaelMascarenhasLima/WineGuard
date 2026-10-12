import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ComoFunciona from './pages/Comofunciona'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Inicio from './pages/Inicio'
import Node from './pages/Node'
import Projeto from './pages/Projeto'

/** Ao trocar de página, volta ao topo. */
function RolarAoTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <RolarAoTopo />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/node" element={<Node />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}