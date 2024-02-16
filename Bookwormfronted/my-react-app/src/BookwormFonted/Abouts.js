const AboutUs = () => {
  return (
    <div>
      <br></br>
      <div style={{ backgroundColor: "whitesmoke" }} className="about-section">
        <h1>About Us Page</h1>
        <p>● Technologies :- Java,C#,JavaScript,JWT,Dockerization.</p>
        <p>
          ● FrameWork and Libraries used:- Spring Boot, Bootstrap, React JS, &
          Asp.net,Redux.
        </p>
        <p>● Description:</p>
        <p>
          ➢ Led the development of a virtual bookshop platform, enabling users
          to buy, store, and read books, music albums, and films online.{" "}
        </p>
        <p>
          {" "}
          ➢ Conceptualized and finalized the application's concept through
          effective brainstorming sessions.{" "}
        </p>
        <p>
          ➢ Achieved seamless integration of various technologies to deliver a
          user-friendly and feature-rich platform.
        </p>
      </div>

      <h2 style={{ textAlign: "center", backgroundColor: "" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div style={{ backgroundColor: "whitesmoke" }} className="card">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={"/Owner/Photograph.jpeg"}
                alt="Mike"
                style={{ width: "150px" }}
              />
            </div>
            <div className="container">
              <h2>Mayur Patil</h2>
              <p className="title">CEO & Founder</p>
              <p>
                Recent graduate and aspiring Full-Stack Developer eager to
                contribute technical skills and passion for innovation to a
                dynamic organization. Committed to continuous learning and
                embracing new technologies to drive impactful solutions.
              </p>
              <p>mayurvasudeopatil@gmail.com</p>
              <p>Contact NO : 9730491554</p>
            </div>
          </div>
        </div>

        {/* Repeat the structure for other team members */}
        {/* For example: */}
      </div>
      <div className="row">
        <div className="column">
          <div style={{ backgroundColor: "whitesmoke" }} className="card">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={"/Owner/WhatsApp Image 2023-12-17 at 11.16.24 AM.jpeg"}
                alt="Mike"
                style={{ width: "150px" }}
              />
            </div>
            <div className="container">
              <h2>Rajesh Dalwe</h2>
              <p className="title">Experties Master</p>
              <p>
                Recent graduate and aspiring Full-Stack Developer eager to
                contribute technical skills and passion for innovation to a
                dynamic organization. Committed to continuous learning and
                embracing new technologies to drive impactful solutions.
              </p>
              <p>dalwerajesh31@gmail.com</p>
              <p>Contact NO : 9766843084</p>
            </div>
          </div>
        </div>

        {/* Repeat the structure for other team members */}
        {/* For example: */}
      </div>
    </div>
  );
};

export default AboutUs;
