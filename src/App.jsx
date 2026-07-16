import './App.css'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Modules from './components/Modules'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Ecosystem />
      <Modules />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  )
}

export default App
