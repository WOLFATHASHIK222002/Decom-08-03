import Navbardemo from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import CreateItem from "./Components/CreateItem";
import Error from "./Components/Error";
import Userlogin from "./Userform/Usermain";
import CartList from "./Homecontainer/CartList";
import Signme from "./Userform/Userlogin";
import Productlist from "./Homecontainer/productlist";
import InvoiceForm from "./Invoice-gen/Components/InvoiceForm";
function App() {
  return (
    <div>
      <Navbardemo />
      <main>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createitem" element={<CreateItem />} />
          <Route path="/Userlogin" element={<Userlogin />} />
          <Route path="/Sign" element={<Signme />} />
          <Route path="/CartList" element={<CartList />} />
          <Route path="/invoice" element={<InvoiceForm />} />
          <Route path="/productlist" element={<Productlist />} />
          {/* <Route
            path="/createItem"
            element={
              <Privaterouter user={user}>
                <CreateItem user={user} />
              </Privaterouter>
            }
          /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
