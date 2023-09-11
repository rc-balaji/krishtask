import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Therm from './Therm'

function App() {

  const [count, setCount] = useState(0)
  const [para, setPara] = useState(Array.from({ length: 200 }, () => Math.floor(Math.random() * 101)))


  return (
    <>
        <Therm title={"Temperature"} values={para} unit={"℃"} />
    </>
  )
}

export default App
