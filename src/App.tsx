import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './componenets/Header'
import './App.css'
import Footer from './componenets/Footer'
import NotFound from './componenets/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='header'> 
        <Header/>
      </div>
      <div className='container'>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
