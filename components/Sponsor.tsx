import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPatreon        
} from "@fortawesome/free-brands-svg-icons";

const Sponsor: React.FC = props => {
    return (
      <section className="container-fluid sponsor">
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, vel. Ipsam consequuntur deleniti omnis! Amet distinctio rerum culpa cum sapiente repudiandae est repellendus reprehenderit facilis, possimus illum vitae, voluptates at.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus aut neque perferendis qui velit perspiciatis dicta laborum molestias. Magni quisquam dolorum quae natus consequuntur tempore itaque reiciendis ducimus optio.
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

export default Sponsor;