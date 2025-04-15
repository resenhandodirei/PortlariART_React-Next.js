import Contato from '../contato/Contato'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <Contato />
      </main>
      <Footer />
    </>
  )
}
