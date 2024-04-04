
import Dashboard from '../pages/Dashboard'
import Stores from '../pages/Stores'
import ProductList from '../pages/ProductList'
import ProductRequest from '../pages/ProductRequest';
import Employee from '../pages/Employee'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Supplier from '../pages/Supplier';

const SideBar = () => {
  const user="Mir"
  
  return (
    <>
      <Router>
        <div className="sideBar">
          <h3 className="userLogin">Logged In as {user}</h3>
          <ul>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/Stores">Stores</Link>
            </li>
            <li>
              <Link to="/ProductList">Products</Link>
            </li>
            <li>
              <Link to="/Orders">Orders</Link>
            </li>
            <li>
              <Link to="/Employee">Employee</Link>
            </li>
            <li>
              <Link to="/Supplier">Supplier</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Stores" element={<Stores/>}/>
            <Route path="/ProductList" element={<ProductList/>}/>
            <Route path="/Orders" element={<ProductRequest/>}/>
            <Route path="/Employee" element={<Employee/>}/>
            <Route path="/Supplier" element={<Supplier/>}/>
          </Routes>
        </div>
        </Router>
    </>
  )
}

export default SideBar