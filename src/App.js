import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import History from "./pages/history/History";
import Login from "./pages/login/login";
import Signin from "./pages/login/signin/signin";
import Signup from "./pages/login/signup/signup";
import Order from "./pages/order/Order";
import Routing from "./pages/routing/Routing";
import Statistic from "./pages/statistic/Statistic";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Signin />} />
          <Route path="logout" element={<Signup />} />
          <Route path="route" element={<Routing />} />
          <Route path="statistic" element={<Statistic />} />
          <Route path="history" element={<History />} />
          <Route path="order/*">
            <Route index element={<Order />} />
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
