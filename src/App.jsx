import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Details } from "./components/Details"
import { Login } from "./components/Login"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
