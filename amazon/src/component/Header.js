import React from "react";
import './Header.css';
import { useEffect,useState } from "react";

const base_url = "https://amazon-0giy.onrender.com/categories";

const Header = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
     fetch(`${base_url}`, { method: "GET" })
       .then((res) => res.json())
       .then((data) => {
         setCategory(data);
         console.log(data);
       });
   }, []);
    return(
        <>

        <header className="header">
         <div className="container container-header">
            <div className="logo-container border-white">
                <div className="logo"></div>
                <span className="dotin">.in</span>
            </div>
            <div className="address-container border-white">
                <p className="hello">Hello</p>
                <div className="icon-address">
                    <i className="fa-solid fa-location-dot icon-location"></i>
                    <p>Select your address</p>
                </div>
            </div>
            <div className="search-container">
                <select className="search-select">
                    {
                        category?.map((item)=>{
                            return <option key={item.id}>{item.category}</option>
                        })
                    }
                    
                    <option>All</option>
                </select>
                <input  type="text" className="search-input" />
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="language-container border-white">
                <p>English</p>
                <div className="lauguge-image">
                    <img
                        src="https://media.istockphoto.com/vectors/vector-flag-of-the-republic-of-india-proportion-23-the-national-flag-vector-id1051236720?k=20&m=1051236720&s=612x612&w=0&h=ATObRTHmTosADa9zaB2dQPn_VAQmG1XYH2x92kzc304=" />
                </div>
            </div>
            <div className="login-container border-white">
               <a href="./login.html"><p>Hello,<span>sign in</span></p></a>
                <p className="account">Account & Lists</p>
            </div>
            <div className="return-order-container">
                <p>Returns
                <div className="order">& Orders</div>
                </p>
            </div>
            <div className="cart-container border-white">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
         </div> 
    </header>
    
    <nav className="nav">
        <div className="container container-nav">
            <ul>
                <li className="border-white" id="open-nav-sidebar">
                <span className="open-nav-slider">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </span>
                </li>
                <li className="border-white"><a href="#">Best Sellers</a></li>
                <li className="border-white"><a href="#">Today's Deals</a></li>
                <li className="border-white"><a href="#">Mobiles</a></li>
                <li className="border-white"><a href="#">Customer Service</a></li>
                <li className="border-white"><a href="./list.html">Electronic</a></li>
                <li className="border-white"><a href="#">Home & Kitchen</a></li>
                <li className="border-white"><a href="#">Fashion</a></li>
                <li className="border-white"><a href="#">Book</a></li>
                <li className="border-white prime-image-hover">
                    <a href="#">Prime</a>
                    <div className="prime-image">
                        <img
                            src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg" />
                    </div>
                </li>
            </ul>
            <div className="nav-right-image-amazon-prime">
                <img
                    src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/Watch-Entertainment-for-FREE_400-x39._CB605460886_.jpg" />
            </div>
        </div>
    </nav>
    
      {/* <div className="popup"> 
        <div class="contentBox">
            <div class="close"></div>
           <div class="imgBx">
             <img src="./image/gift.png" alt="gift icon"/>
           </div>
           <div class="content">
            <div>
                <h3>Special Offer</h3>
                <h2>50<sup>%</sup> <span>Off</span></h2>
                   <p> Hurry Up To Win Prizes <br/>
                     Use This Code 997599</p>
                    <a href="#"> Get The Deal</a>
            </div>
           </div>
        </div> 
    </div> */}

         </>
    )
}

export default Header;