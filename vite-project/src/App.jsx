import { Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
{/*Components*/}
import NavBar from './Components/NavBar'
import BookForm from './Components/BookForm'
import AddBookForm from './Components/AddBookForm'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import Footer from './Components/Footer'
{/*Pages*/}
import Home from './Pages/Home'
import BookShelf from './Pages/BookShelf'
{/*Data Provider*/}
import { ContextProvider } from './Context/ContextProvider'



function App() {
 


  return (
    <>
      <div>
       <ContextProvider>
        <NavBar/>
        <div className='pt-16'>
          <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/Home' element={<Home/>}/>
            <Route path='/BookShelf' element={<BookShelf/>}/>
            {/*Components*/}
            <Route path='/BookForm' element={<BookForm/>}/>
            <Route path='/AddBookForm' element={<AddBookForm/>}/>
            <Route path='/SignupForm' element={<SignupForm/>}/>
            <Route path='/LoginForm' element={<LoginForm/>}/>
          </Routes>
          </div>
       
          <div className='pt-5'>
          <Footer/>
          </div>
          </ContextProvider>
      </div>
    </>
  )
}

export default App
