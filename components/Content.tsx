import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDiscord,
    faPatreon,
    faYoutube              
} from "@fortawesome/free-brands-svg-icons";

import { 
  faBook,
  faBriefcase,
  faUserFriends          
} from "@fortawesome/free-solid-svg-icons";

const Content: React.FC = props => {
  return (
  <section className="container-fluid content">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <FontAwesomeIcon icon={faBook} style={{width: '65px', height: '65px'}}/>
            <h3 className="card-title">Blog</h3>
            <p>Find useful information on today's popular technologies and programming mehtods in the form of guides, tutorials and quick tips in the blog section</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <FontAwesomeIcon icon={faYoutube} style={{width: '65px', height: '65px'}}/>
            <h3 className="card-title">Videos</h3>
            <p>Find weekly videos on the Alaric Bell youtube channel and be part of the channel's growth. The goal of the channel is to provide free, easy to understand guides and tutorials regardless of skill level</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
            <h3 className="card-title">Discord</h3>
            <p>Join the Discord community that keeps you updated and provides a great place to build friendship with other developers</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <FontAwesomeIcon icon={faPatreon} style={{width: '65px', height: '65px'}}/>
            <h3 className="card-title">Patreon</h3>
            <p>Be part of the Patreon supporters and enjoy special content, community competitions for prizes, private codes and a lot more</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <FontAwesomeIcon icon={faBriefcase} style={{width: '65px', height: '65px'}}/>
            <h3 className="card-title">Work</h3>
            <p>If you want your website to be created by Alaric Bell, contact me via email with pricing and terms</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <FontAwesomeIcon icon={faUserFriends} style={{width: '65px', height: '65px'}}/>
            <h3 className="card-title">Sponsorship</h3>
            <p>Alaric Bell channel is continuosly accepting sponsorship, contact me via email with pricing and terms</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Content;