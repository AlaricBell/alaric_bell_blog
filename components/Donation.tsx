import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPatreon        
} from "@fortawesome/free-brands-svg-icons";

const Donation: React.FC = props => {
    return (
      <section className="container-fluid donation">
        <div className="row m-title">
          <div className="col-2 header-container">
            <span className="header-line"></span>
          </div>
          <div className="col-8 header-title header-container">
            <h2>Patreon</h2>
            
          </div>
          <div className="col-2 header-container">
            <span className="header-line"></span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 donation-content">
              <p>I am providing free educational content on youtube and my blog page. 
                If you are interested in supporting the channel consider subscribing to my Patreon where you can enjoy special content, 
                community competitions for prizes, private application codes and a lot more. 
                Donations are not required but showing your support even with 2$ / month means a lot to me
              </p>
            </div>

            <div className="col-12 donation-content">
              <a href="https://www.patreon.com/alaricbell" target="_blank" className="btn btn-neon"><FontAwesomeIcon icon={faPatreon} style={{width: '30px', height: '30px'}}/>Support the channel</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Donation;