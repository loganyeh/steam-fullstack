import { Route, Routes } from "react-router-dom"

// import comps
import Home from "./pages/Home/Home"
import Store from "./pages/Store/store"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Store />} />
      </Routes>
    </>
  )
}

export default App
