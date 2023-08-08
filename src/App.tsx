import { Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import { lazy, Suspense } from 'react';
import TopLoadingBar from "./Components/TopLoadingBar";


const HomePage = lazy(() => import('./Page/HomePage/HomePage'));

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Suspense fallback={<TopLoadingBar />}><HomePage /></Suspense>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
