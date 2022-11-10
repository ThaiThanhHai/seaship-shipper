import { Dashboard } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/login";
import Signin from "./pages/login/signin/signin";
import Signup from "./pages/login/signup/signup";
import Order from "./pages/order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login/*">
            <Route index element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="order/*">
            <Route index element={<Order />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
