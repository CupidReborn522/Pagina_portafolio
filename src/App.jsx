import './App.css'
import Navbar from './components/Navbar'
import ProjectGrid from './components/Projects/ProyectGrid'
import Section_v1 from './components/Section_v1'
import Section_v2 from './components/Section_v2'
import Section_v3 from './components/Section_v3'


function App() {
  return (
    <>
    <Navbar/>
    <div className='bg-gray-900 px-5'>
    <Section_v1/>
    <Section_v2/>
    <Section_v3/>
    <ProjectGrid/>
    </div>
    </>
  )
}

export default App
