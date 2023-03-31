import { Toaster } from 'react-hot-toast'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  

  return (
    <div className="App">
      <Header />
      <hr />
      <div><Toaster /></div>
      <Blogs />
    </div>
  )
}

export default App
