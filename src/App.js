import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { About } from "./components/pages/About";
import { Shop } from "./components/pages/Shop";
import { Contact } from "./components/pages/Contact"
import { Services } from './components/pages/Services';
import { Blog } from "./components/pages/Blog"
import { Bascet } from "./components/elements/Bascet"
import Home from "./components/pages/Home"
import { Provider } from 'react-redux';
import store, {persistor} from './store';
import {PersistGate} from "redux-persist/integration/react"




function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/bascet' element={<Bascet/>}/>
      </Routes>
      


     
    
    
      <Footer/>
    </div>
    </PersistGate>
    </Provider>
  );
};

export default App;
