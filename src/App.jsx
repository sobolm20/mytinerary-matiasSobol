import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/Nav'
import Galery from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-slate-500 w-full h-[25vh] p-1 rounded-md'>
        <Header />      
        <NavBar />
        
      </header>
      <main className='principal'>
        <h2 className="text-green-500 text-xl font-semibold flex justify-start items-end">Find your perfect trip, designed by insiders who know and love their cities!</h2>
        <aside className='contentido'>

        </aside>
        <section className='ilustracion'>
      
        </section>
      </main>
      <footer className="card">
        <Footer />
      </footer>
    </>
  )
}
  
export default App

//import { Images } from './components/Carousel/citiesnight.json'
//import Carousel from './components/Carousel/Carousel'

