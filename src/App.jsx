import { BrowserRouter } from "react-router-dom"
import { Routes , Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./Pages/Login"
import AppLayout from "./Pages/AppLayout"
import Cities from "./Components/Cities"
import Countries from "./Components/Countries"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/app" element={<AppLayout/>}>
          <Route index  element={<Cities/>}/>
          <Route path="cities" element={<Cities/>}/>
          <Route path="countries" element={<Countries/>}/>
        </Route>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
