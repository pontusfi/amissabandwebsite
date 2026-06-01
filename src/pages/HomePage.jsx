import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Discography from '../components/Discography'
import Shows from '../components/Shows'
import Gallery from '../components/Gallery'
import Merch from '../components/Merch'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-void">
      <Nav />
      <main>
        <Hero />
        <About />
        <Discography />
        <Shows />
        <Gallery />
        <Merch />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
