import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './componenets/Header'
import './App.css'
import Footer from './componenets/Footer'
import NotFound from './componenets/NotFound'
import Home from './componenets/Home'
import MovieDetail from './componenets/MovieDetail'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='header'> 
        <Header/>
      </div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Movie/:id' element={<MovieDetail/>}/>
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
