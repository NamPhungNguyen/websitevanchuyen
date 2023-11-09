import React from "react";
import './footer.scss';
import {BsFacebook} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Bussiness</h4>
                        <a href="#">
                            <p>Employer</p>
                        </a>
                        <a href="#"><p>Health Plan</p></a>
                        <a href="#"><p>Individual</p></a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="#">
                            <p>Resource center</p>
                        </a>
                        <a href="#">
                            <p>Testimonials</p>
                        </a>
                        <a href="#">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="#">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="#">
                            <p>About</p>
                        </a>
                        <a href="#">
                            <p>Press</p>
                        </a>
                        <a href="#">
                            <p>Carrer</p>
                        </a>
                        <a href="#">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p style={{color:'blue', fontSize:'20px'}}><BsFacebook/></p>
                            <p style={{color: '#fa0c92', fontSize:'20px'}}><BiLogoInstagramAlt/></p>
                            <p style={{color:'blue', fontSize:'20px'}}><AiOutlineTwitter/></p>
                            <p style={{color:'red', fontSize:'20px'}}><AiFillYoutube/></p>

                        </div>
                    </div>

                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="#"><div><p>Terms & Conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                        <a href="#"><div><p>Cookie Declaration</p></div></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;