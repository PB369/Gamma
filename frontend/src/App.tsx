import './App.scss'
import { Route, Routes } from "react-router-dom"
import Welcome from "./Pages/Welcome/Welcome"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  )
}

export default App
