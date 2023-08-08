import { Route, Routes } from "react-router-dom"
import HomePage from "./Page/HomePage/HomePage"
import MainLayout from "./Layout/MainLayout"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
