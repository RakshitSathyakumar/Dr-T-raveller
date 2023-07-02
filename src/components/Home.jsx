import React from 'react'
import vg from '../assets/capture2.jpeg'

const Home = () => {
  return (
    <>
    <div className="home">
        <main>
        <h1>Dr. Traveller</h1>
        <p>Way to go!! only guide you need for your next trip</p>
        </main>
    </div>

    <div className="about">
        <img src={vg} alt="plane" />
        {/* <div className='aboutContent'> */}
        <p>We team Dr. Traveller are here to assist with your finest yet most affordale service that yout will ever recieve. No matter if you are with your date or alone we as a team Dr. traveller are her to make sure that you get what you pay for!!! with teams organised we are able come up with hest possible plsn for any location that you have comne upp!!</p>
        {/* </div> */}
    </div>
    
    <div className="hom3">
        <div>
            
        </div>
    </div>

    </>
  )
}

export default Home