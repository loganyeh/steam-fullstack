import { Route, Routes } from "react-router-dom"

// import comps
import Store from "./pages/Store/Store"

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
