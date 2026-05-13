import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="bg-dark text-white">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#fff',
            borderRadius: '0',
            fontSize: '13px',
            fontWeight: '600',
            border: '1px solid rgba(255,255,255,0.06)',
          },
          success: { iconTheme: { primary: '#06d6a0', secondary: '#18181b' } },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustedBy />
        <About />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
