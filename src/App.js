import './App.css';
import {Routes ,Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import OrderSummary from './OrderSummary'
import PageNotFound from './PageNotFound';
import Product from './Product';
import Feutured from './Feutured';
import New from './New'
import Users from './Users'
import UserDetails from './UserDetails'
import AdminUser from './AdminUser';
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="about" element={<About/>} />
          <Route path='order-summary' element={<OrderSummary/ >} />
          <Route path='Profile' element={<Profile />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='Product' element={<Product />} >
            <Route index element={<Feutured />} />
            <Route path='Feutured' element={<Feutured />} />
            <Route path='New' element={<New />} />
          </Route>
          <Route path='Users' element={<Users />}>
            <Route path=':userID' element={<UserDetails />} />
            <Route path='AdminUser' element={<AdminUser/>} />
          </Route>
           
       </Routes>
         
    </div>
  );
}

export default App;
