import "./App.css";

import "./sb-admin-2.min.css";

import Components from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Portal from "./Portal";
import Createuser from "./Createuser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/portal" element={<Portal></Portal>}>
          <Route path="components" element={<Components></Components>} />
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="createuser" element={<Createuser></Createuser>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
