import React from 'react'
import './home.css'
// import CallIcon from '@mui/icons-material/Call';
function Home() {
    return (
        <div>
            <nav className="background-image">

                <div className="navbar">
                    <div className="logo">
                        <img src="https://cdn.sriggle.tech/kantents/production/23/122/03/11eb9c22-3258-4871-ba0c-06e9dec65dd5.png"
                            alt="Logo" />
                    </div>

                    <ul>
                        <li>About us</li>
                        <li>Destinations</li>
                        <li>Experiences</li>
                        <li>Travel Styles</li>
                        <li>Contact us</li>


                    </ul>
                </div>
                <div className='sub-container'>
                    <div className="line-1"></div>
                    <div className='small-quote'>New Age Destination Mangement </div>
                </div>
                <div className='container-title'>
                    Take the <br />
                    <span style={{ marginRight: '-29px' }}>world for</span> <br />
                    <span style={{ marginRight: '64px' }}>a ride</span>
                </div>
                <div className='small-contact'>
                    <div className="line-2"></div>
                    <div>
                        <i className="fa fa-phone" style={{ fontSize: "20px" }}></i> <br />
                        <button className='btn'>Contact us</button>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between ", alignItems: "center" }}>
                    <div>
                        <div className='quote-2'>
                            Journeys that can't be beat
                        </div>
                        <div className='small-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div>
                            <i id='fa-save' class="fa fa-save" ></i>
                            <button className='readmore-btn'>Read More</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '7rem' }}>
                        <div class="example">
                            <img className='gif-1' src="https://i.gifer.com/6CvW.gif" alt="Computer man" />
                            <div class="overlay-text">
                                <p style={{ fontSize: '10px' }}>committed to uploading </p>
                                <h1 style={{ fontSize: "20px", textAlign: "initial" }}>ACADIA NATIONAL PARK</h1>

                            </div></div>
                        <div class="example">
                            <img className='gif-1' src="https://i.gifer.com/6CvW.gif" alt="Computer man" />
                            <div class="overlay-text">
                                <p style={{ fontSize: '10px' }}>committed to uploading </p>
                                <h1 style={{ fontSize: "20px", textAlign: "initial" }}>BLOG TITLES</h1>

                            </div></div>
                        <div class="example">
                            <img className='gif-1' src="https://i.gifer.com/6CvW.gif" alt="Computer man" />
                            <div class="overlay-text">
                                <p style={{ fontSize: '10px' }}>committed to uploading </p>
                                <h1 style={{ fontSize: "20px", textAlign: "initial" }}>ACADIA NATIONAL PARK</h1>

                            </div></div>
                        <div class="example">
                            <img className='gif-1' src="https://i.gifer.com/6CvW.gif" alt="Computer man" />
                            <div class="overlay-text">
                                <p style={{ fontSize: '10px' }}>committed to uploading </p>
                                <h1 style={{ fontSize: "20px", textAlign: "initial" }}>ACADIA NATIONAL PARK</h1>

                            </div></div>


                    </div>
                </div>
            </nav>
            <div className="secondSection">
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div style={{ width: '300px', textAlign: 'center' }}>
                        <img alt='img' style={{ marginTop: '9rem', borderRadius: '40px' }} width={300} height={250} src='https://cdn.sriggle.tech/1/104/9852/1032576/5000/1316025062.jpg' />
                        <h1 className='tour-title'>Unique tours</h1>
                        <div className='red-line2'></div>
                        <p style={{ fontSize: "13px", textAlign: 'center', }}>abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                    </div>
                    <div style={{ width: '300px', textAlign: 'center' }}>
                        <img alt='img' style={{ marginTop: '9rem', borderRadius: '40px' }} width={300} height={250} src='https://cdn.sriggle.tech/signatureuploads/23/package/packagemain/d8a1eb65-6ba9-465d-8e1b-9f2dde7dc035.jpg' />
                        <h1 className='tour-title'>Gobal presence</h1>
                        <div className='red-line2'></div>
                        <p style={{ fontSize: "13px", textAlign: 'center' }}>abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                    </div>
                    <div style={{ width: '340px', textAlign: 'center' }}>
                        <img alt='img' style={{ marginTop: '8rem', borderRadius: '40px' }} width={300} height={250} src='https://cdn.sriggle.tech/signatureuploads/23/package/packagemain/aa5cf02d-7c2e-4fa1-8e07-6f5e0f68698b.jpg' />
                        <h1 className='tour-title'>25 years of Experience</h1>
                        <div className='red-line2'></div>
                        <p style={{ fontSize: "13px", textAlign: 'center' }}>abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home