import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook,
    faTwitter,
    faYoutube,
    faGithub            
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
                            <li><a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ"><FontAwesomeIcon icon={faYoutube} style={{width: '30px', height: '30px'}}/></a></li>
                            <li><a href="https://www.facebook.com/Alaric-Bell-108850441481263"><FontAwesomeIcon icon={faFacebook} style={{width: '30px', height: '30px'}}/></a></li>
                            <li><a href="https://twitter.com/AlaricBell"><FontAwesomeIcon icon={faTwitter} style={{width: '30px', height: '30px'}}/></a></li>
                            <li><a href="https://github.com/AlaricBell"><FontAwesomeIcon icon={faGithub} style={{width: '30px', height: '30px'}}/></a></li>
                        </ul>
                    </div>
                    <p className="copy">&copy; 2021 Alaric Bell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;