import { BrowserRouter } from "react-router-dom"
import { Routes , Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./Pages/Login"
import AppLayout from "./Pages/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/app" element={<AppLayout/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
