
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Guards from './Pages/Guards'
import Contact from './Pages/Contact'



function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
           <Route path='about' element={<About/>}/>
           <Route path='services' element={<Services/>}/>
           <Route path='guards' element={<Guards/>}/>
           <Route path='contact' element={<Contact/>} />
       </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
