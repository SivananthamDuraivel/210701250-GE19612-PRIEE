import React from 'react'
import './Footer.css'
import { IoPersonSharp } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="sb_footer">
            
        <div className="sb_footer-links">
            <div className="sb_footer-links-div">
                <h4>Team Members</h4>
                <a href="#"><p><IoPersonSharp /> Sivanantham D</p></a>
                <a href="#"><p><IoPersonSharp /> Santhosh P</p></a>
                <a href="#"><p><IoPersonSharp /> Gopal K</p></a>
            </div>
            <div className="sb_footer-links-div">
                <h4>Nutri<span className='vision'>Vision</span></h4>
                <a href="#about"><p>About</p></a>
                <a href="#"><p>Press</p></a>
                <a href="#"><p>Career</p></a>
                <a href="#"><p>Contact</p></a>
            </div>
            <div className="sb_footer-links-div">
                <h4>Follow on</h4>
                <div className='socialmedia'>
                    <p><FaSquareFacebook /> Facebook</p>
                    <p><FaXTwitter /> Twitter</p>
                    <p><FaInstagram /> Insta</p>
                    <p><TfiLinkedin /> Linkedin</p>
                </div>
            </div>
        </div>
            <div className="line"></div>
            <div className="sb_footer-below">
                <div className='sb_footer-copyright'>
                    <p>
                        @ {new Date().getFullYear()} <FaRegCopyright /> All right reserved.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href="#"><div><p>Terms & Conditions</p></div></a>
                    <a href="#"><div><p>Privacy</p></div></a>
                    <a href="#"><div><p>Security</p></div></a>
                    <a href="#"><div><p>Cookie declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer