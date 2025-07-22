import { BrowserRouter } from "react-router-dom"
import { Routes , Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing"
import ErrorPage from "./Pages/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
