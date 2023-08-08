import { Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import { lazy, Suspense } from 'react';
import TopLoadingBar from "./Components/TopLoadingBar";

const HomePage = lazy(() => import('./Page/HomePage/HomePage'));
const SingleProductPage = lazy(() => import('./Page/SingleProduct/Page'));
const CartPage = lazy(() => import('./Page/Cart/Page'));

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Suspense fallback={<TopLoadingBar />}><HomePage /></Suspense>} />
          <Route path="/product/:id" element={<Suspense fallback={<TopLoadingBar />}><SingleProductPage /></Suspense>} />
          <Route path="/cart" element={<Suspense fallback={<TopLoadingBar />}><CartPage /></Suspense>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
