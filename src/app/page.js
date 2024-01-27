import About from '@/components/about'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Maps from '@/components/maps'
import Navbar from '@/components/navbar'
import Rooms from '@/components/room'
import Services from '@/components/service'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Maps />
      <Footer />
    </>
  )
}
