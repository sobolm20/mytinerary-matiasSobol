import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/Nav'
import { Images } from './components/Carousel/citiesnight.json'
import CarouselC from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-slate-500 w-full h-[25vh] p-1 rounded-md'>
        <Header />      
        <NavBar />
        
      </header>
      <main className='h-[80vh] p-2 rounded-md m-4'>
        <h2 className="text-green-500 text-xl font-semibold flex justify-start items-end">Find your perfect trip, designed by insiders who know and love their cities!</h2>
      <section className='box'>
        <CarouselC citiesnight={Images} />
      </section>
      </main>
      <footer className="card">
        <Footer />
      </footer>
    </>
  )
}
  
export default App
