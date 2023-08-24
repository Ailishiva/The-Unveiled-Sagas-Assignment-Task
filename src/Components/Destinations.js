import React from 'react'
import './Destinations.css'
function Destinations() {
    return (
        <>
            <div className='destination-section'>
                <div className='one-number'>
                    01.
                </div>

                <div className='destination-container'>
                    <h1 style={{ fontFamily: 'math', textTransform: 'uppercase' }}> Destinations</h1>
                    <div className='red-line'></div>
                    <p style={{ fontSize: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.</p>
                    <i id='save' class="fa fa-save" ></i>
                    <button className='readmore'>Read More</button>
                </div>
                <div>

                    <div class="example">
                        <img id='gif-1' src="https://i.gifer.com/6CvW.gif" alt="Computer man" />
                        <div class="overlay-text">
                            <p style={{ fontSize: '10px' }}>committed to uploading </p>
                            <h1 style={{ fontSize: "20px", textAlign: "initial" }}>ACADIA NATIONAL PARK</h1>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="example">
                        <img id='gif-1' src="https://i.gifer.com/6CvW.gif" alt="Computer man" />
                        <div class="overlay-text">
                            <p style={{ fontSize: '10px' }}>committed to uploading </p>
                            <h1 style={{ fontSize: "20px", textAlign: "initial" }}>ACADIA NATIONAL PARK</h1>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Destinations