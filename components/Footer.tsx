import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook,
    faInstagram,
    faTwitter            
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = props => {
    return (
        <footer>
            <div className="container"> 
                <div className="footer-items"> 
                    <div className="footer-social">
                        <p className="notify">Follow me</p>
                        <span className="line"></span>
                        <ul className="icons-social">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} style={{width: '30px', height: '30px'}}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} style={{width: '30px', height: '30px'}}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} style={{width: '30px', height: '30px'}}/></a></li>
                        </ul>
                    </div>
                    <p className="copy">&copy; 2021 Alaric Bell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;