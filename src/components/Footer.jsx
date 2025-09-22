import { Link } from 'react-router-dom';
const Footer=()=>{
    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-para">
                    <p>Copyright © 2025 Suraj Angadi | Portfolio Website</p>
                </div>
                <div className="footer-para-1">
                    <p>Connect with me:</p>
                </div>
                <div className="footer-list">
                    <ul id="footer-ul">
                        <li className="footer-li"><Link className="footer-link" to="https://github.com/Surajangadi03" target='_blank'>Github <i class="fa-brands fa-github footer-icon"></i> </Link></li>
                        <li className="footer-li"><Link className="footer-link" to="https://www.linkedin.com/in/suraj-angadi-232b0a333/" target='_blank'>LinkedIn <i class="fa-brands fa-linkedin footer-icon"></i></Link></li>
                        <li className="footer-li"><Link className="footer-link" to="#">Portfolio <i class="fa-solid fa-briefcase"></i></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;