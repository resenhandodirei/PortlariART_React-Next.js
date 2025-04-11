import AboutScreen from '../about/About'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <AboutScreen />
      </main>
      <Footer />
    </>
  )
}
