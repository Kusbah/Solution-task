import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HapticPage from "./pages/HapticPage";
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Haptic' element={<HapticPage />}/>
      </Routes>
    </div>
  )
}

export default App
