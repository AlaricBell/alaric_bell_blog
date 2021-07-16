const About: React.FC = props => {
  return (
    <section className="about container-fluid">
    <div className="row">
      <div className="col-2 about-content">
        <span className="header-line"></span>
      </div>
      <div className="col-8 header-title about-content">
        <h2>Alaric Bell</h2>
        
      </div>
      <div className="col-2 about-content">
        <span className="header-line"></span>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 about-content">
          <img src="/img/profile.jpg" alt="Profile image of the creator" className="img-profile"/>
        </div>
        <div className="col-12 col-md-6 about-content">
          <p>At the beginning of my journey I was amazed how efficiently programming can be learned 
          with a trustworthy instructor. Simply being online, researching and practicing made me a better programmer every single day.</p>
          <p>As a freelancer webdeveloper I am doing my best to provide the highest quality content for everyone who is willing to learn webdevelopment.</p>
          <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-youtube">Alaric Bell's Channel</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;