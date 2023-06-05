import './App.css';
import Aboutus from './components/Aboutus';
import Category from './components/Category';
import Footer from './components/Footer';
import Home from './components/Home';
import Contactuspage from './components/contactuspage';
import Navbar from './components/navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PersonList from './components/news';
import Employee from './components/Employee';
import Items from './components/items';
import Cart from './components/Cart';
import FoundationPage from './components/Foundation';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>

        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Aboutus' element={<Aboutus/>}></Route>
        <Route exact path='/ContactUs' element={<Contactuspage/>}></Route>
        <Route exact path='/Categories' element={<Category/>}></Route>
        <Route exact path='/News' element={<PersonList/>}></Route>
        {/* <Route exact path='/Cart' element={<Basic/>}></Route> */}
        <Route exact path='/Employees' element={<Employee/>}></Route>
        <Route exact path='/Products' element={<Items/>}></Route>
        <Route exact path="/Cart" element={<Cart/> } />
        <Route exact path="/Foundation" element={<FoundationPage/> } />

          
        </Routes>
      </Router>
      <Footer />      
    </div>
  );
}

export default App;
