import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Main from "./routes/Main";
import Offers from './routes/Offers'
import SavedProducts from './routes/SavedProducts'
import Orders from './routes/Orders'
import Cart from "./routes/Cart";
import SignIn from './routes/SignIn'
import Ditailes from './routes/Ditailes'
import SignUp from './routes/SignUp'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="Main" element={<Main />} />
      <Route path="Offers" element={<Offers />} />
      <Route path="Savedproducts" element={<SavedProducts />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Signin" element={<SignIn />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Ditailes" element={<Ditailes />} />
    </Routes>
  </BrowserRouter>
);