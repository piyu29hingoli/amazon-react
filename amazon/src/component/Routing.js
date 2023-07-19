import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>

                    <Route index element={<Home/>}/>
                      <Route path="Home" element={<Home/>}/> 
                        {/* <Route path="listing" element={<listing/>}/>  */}
                     
                </Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;