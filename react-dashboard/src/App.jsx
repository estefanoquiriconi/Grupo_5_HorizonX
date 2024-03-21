import './assets/css/app.css'
import { Routes, Route } from 'react-router-dom'
import { TopBar } from './components/TopBar'
import { DashboardContent } from './components/DashboardContent'
import { StatsSection } from './components/StatsSection'
import { Error404 } from './components/Error404'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { Categories } from './components/Categories'
import { LastProductCard } from './components/LastProductCard'

function App() {
  return (
    <div id='wrapper'>
      <Sidebar />
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <TopBar />
          <div className='container-fluid'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>
              <h1 className='h3 mb-0 text-gray-800'>HorizonX</h1>
            </div>
            <Routes>
              <Route path='/' element={<DashboardContent />} />
              <Route path='/genres' element={<Categories />} />
              <Route path='/last' element={<LastProductCard />} />
              <Route path='/stats' element={<StatsSection />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
