import { HashRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <HashRouter>
      <div className="bg-white text-ink">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#171717',
              color: '#fff',
              borderRadius: 0,
              fontSize: '13px',
              fontWeight: 600,
            },
          }}
        />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  )
}

export default App
