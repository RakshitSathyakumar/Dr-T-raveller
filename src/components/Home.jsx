import React from "react";
import vg from "../assets/capture2.jpeg";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Dr. Traveller</h1>
          <p>Way to go!! only guide you need for your next trip</p>
        </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="plane" />
        {/* <div className='aboutContent'> */}
        <p>
          We team Dr. Traveller are here to assist with your finest yet most
          affordale service that yout will ever recieve. No matter if you are
          with your date or alone we as a team Dr. traveller are her to make
          sure that you get what you pay for!!! with teams organised we are able
          come up with hest possible plsn for any location that you have comne
          upp!!
        </p>
        {/* </div> */}
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we ?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            ipsam culpa officia suscipit dignissimos, tempora perspiciatis
            consectetur ducimus at delectus quia, ea, maiores repudiandae
            possimus error hic autem expedita! A tempora eum dicta ab possimus
            hic totam et. Ad aperiam voluptatibus consequatur eaque
            exercitationem debitis magni illum iure, fugiat quae odit, dicta
            quisquam ut, repellendus necessitatibus. Facilis nihil harum totam,
            maiores praesentium officia nisi. Enim asperiores beatae aperiam,
            explicabo dolor et? Corrupti ipsum velit veritatis fugit libero,
            sunt, dolores dolore commodi magnam similique laboriosam nulla
            deserunt minima sint qui accusantium illo, quas ut nesciunt
            repellendus aut ipsa quisquam tempora excepturi.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillFacebook />
              <p>Meta</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGithub />
              <p>GitHub</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
