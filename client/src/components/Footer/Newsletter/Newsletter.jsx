import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <a href="https://www.linkedin.com/in/ankit-satyam-0390751b1/" target="blank" className="icon">
                        <FaLinkedinIn size={14} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100007479375433" target="blank" className="icon">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="https://twitter.com/AnkitTr73725686?t=YucJpFz4Kkyz5Yq_qzKfLw&s=08" target="blank" className="icon">
                        <FaTwitter size={14} />
                    </a>
                    <a href="https://instagram.com/ankit_tripathi_7?igshid=MzNlNGNkZWQ4Mg==" target="blank" className="icon">
                        <FaInstagram size={14} />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
