import { BrowserRouter } from "react-router-dom"
import { Routes , Route } from "react-router-dom"
import { lazy } from "react"
import { Suspense } from "react"
import SpinnerFullPage from "./Components/SpinnerFullPage"
//split bundle inti small chuncks
const HomePage=lazy(()=>import("./Pages/HomePage"));
const Product=lazy(()=>import("./Pages/Product"));
const Pricing=lazy(()=>import("./Pages/Pricing"));
const PageNotFound=lazy(()=>import("./Pages/PageNotFound"));
const Login=lazy(()=>import("./Pages/Login"));
const AppLayout=lazy(()=>import("./Pages/AppLayout"));

import Cities from "./Components/Cities"
import Countries from "./Components/Countries"
import City from "./Components/City"
import Form from "./Components/Form"
import { Navigate } from "react-router-dom"
import { CitiesProvider } from "./contexts/citiesContext"
import { Authenticationprovider } from "./contexts/fakeAuthenticationContext"
import ProtectedRoute from "./Pages/ProtectedRoute"

function App() {
  return (
    <Authenticationprovider>
      <CitiesProvider>
      <Suspense fallback={<SpinnerFullPage/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/app" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
              <Route index element={<Navigate  replace to="cities" />}/>
              <Route path="cities" element={<Cities/>}/>
              <Route path="countries" element={<Countries/>}/>
              <Route path="form" element={<Form/>}/>
              <Route path="cities/:id" element={<City/>}/>
            </Route>
            <Route path="/product" element={<Product/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
        </Suspense>
      </CitiesProvider>
    </Authenticationprovider>
  )
}

export default App
