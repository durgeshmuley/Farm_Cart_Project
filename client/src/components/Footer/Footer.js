import React from "react";
import "./Footer.css";
import Logo from '/Users/durgesh07/Downloads/practice project git/mern-ecommerce-master/client/src/components/headers/icon/fclogo2.svg'
function Footer() {
  return (
    <section className="footer">
    <hr className="footer-seperator" />
    <section className="footer-social-media">
   
     <a href="/"  rel="noopener noreferrer" className="fc_name"> <img src={Logo} alt="logo" className="footer_logo"/></a>
    </section>
    <section className="footer-info">
      <section className="footer-info-left">
        <section className="footer-info__name">
            SE- Durgesh Muley & Ankit Tyagi
        </section>
        <section className="footer-info__returns">
          Returns Policy
          <br />
          Delivery
        </section>        
      </section>
      <section className="footer-info-center">
        <section className="footer-info__email">
            Farm_Cart.info@gmail.com
        </section>
        <section className="footer-info__terms">
          Terms and Conditions
          <br />
          Copyright
        </section>
      </section>
      <section className="footer-info-right">
        <section className="footer-info__number">
      +91-8329520565
        </section>
        <section className="footer-info__contact">
     +91-8323392946
          <br />
          Contact Us



              
        </section>
      </section>
    </section>
    <hr className="footer-seperator" />

  </section>
  );
}

export default Footer;