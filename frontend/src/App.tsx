import './App.scss'
import { Route, Routes } from "react-router-dom"
import Welcome from "./Pages/Welcome/Welcome"
import './styles/_variables.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} /> {/*Welcome or Dashboard if Signed in */}
    </Routes>
  )
}

export default App
