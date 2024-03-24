
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  useEffect(()=>{
    window.onscroll=function(){
      if(window.scrollY >50){
        document.body.classList.add('scrolling')
      }else {
        document.body.classList.remove('scrolling')
      }
    }
  })

  return (
    <Home/>
  )
}

export default App
