import "../styles/Home.css";
import vg from "../assets/2.webp";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillAmazonCircle,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>This the homepage of website</h1>
          <p>
            In this page we are going to write the content that is going to be
            viewed by visitors
          </p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print
            , and publishing industries for previewing layouts and visual
            mockups.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <h1>Who are we?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="home4" id="brand">
        <article>
          <div className="brand">
            <h1>Find us here</h1>
            <div className="brand-icons">
              <div className="company_icon" style={{ animationDelay: "0.3s" }}>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
              <div className="company_icon" style={{ animationDelay: "0.5s" }}>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>
              <div className="company_icon" style={{ animationDelay: "0.7s" }}>
                <AiFillFacebook />
                <p>Facebook</p>
              </div>
              <div className="company_icon" style={{ animationDelay: "1s" }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
