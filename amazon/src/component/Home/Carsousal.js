import React from "react";
import './Carsousal.css';


function Carsousal () {
    return (
        <>
        <section class="section-1">
        <div class="section-1-container">
            <div class="section-1-column">
                <h3>Top picks for your home</h3>
                <img src="https://m.media-amazon.com/images/I/81+UCV3xW0L._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
                <p> <a href="#">See more</a></p>
            </div>
            <div class="section-1-column">
                <h3>Top rated, premium quality | Amazon Brands & more</h3>
                <img src="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/JanART22/AFpage/Bottomwidget/01_all-fashion.jpg" alt=""/>
                <p><a href="#"> See more</a></p>
            </div>
            <div class="section-1-column">
                <h3>Shop & Pay | Earn rewards daily</h3>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"alt=""/>
                <p><a href="#"> See more</a></p>
            </div>
            <div class="section-1-column">
                <h3>Sign in for your best experience</h3>
                <button><a href="#"> Sign in securely</a></button>
            </div>
        </div>
    </section>
        </>
    )
}
export default Carsousal;