import React from "react";
import ".//App.css";
import { Header } from "../Header/header";
import { Link } from "../Link/link";
import { Card } from "../Card/card";
import { Footer } from "../Footer/footer";
import { Media } from "../Media/media";
import rec from "../../images/icon-brand-recognition.svg";
import det from "../../images/icon-detailed-records.svg";
import cus from "../../images/icon-fully-customizable.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";


import Logo from "../Header/logo";

function App() {
  return (
    <div>
      <div className="shortly_header">
        <Header />
        <div className="flex-text">
          <div>
            <h2 className="large-text">More than just shorter links</h2>
            <h3>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </h3>
            <a href="/">Get Started</a>
          </div>
          <img
            className="worker-img"
            src="/images/illustration-working.svg"
            alt="worker"
          />
        </div>
        <Link />
       
        
      </div>
      <div className="statistics">
    
        <h2>Advanced Statistics</h2>
        <h4>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h4>
        <hr></hr>
        <div className="card-wrapper">
          <Card
            img={rec}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <Card
             className ="unique-card"
            img={det}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Card
            img={cus}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement audience engagement ."
          />
        </div>
      </div>
      <div className="boost_section">
        <h1>Boost your links today </h1>
        <a href="#">Get Started</a>
      </div>
      <div className="footer">
        <Logo />
        <Footer
          title="Features"
          desc1="Link Shortening"
          desc2="Branded Links"
          desc3="Analytics"
        />
        <Footer
          title="Resources"
          desc1="Blog"
          desc2="Developers"
          desc3="Support"
        />
        <Footer
          title="Company"
          desc1="Our Team"
          desc2="Careers"
          desc3="Contact"
        />
        <Media img={facebook} />
        <Media img={twitter} />
        <Media img={pinterest} />
        <Media img={instagram} />
      </div>
    </div>
  );
}
export default App;
