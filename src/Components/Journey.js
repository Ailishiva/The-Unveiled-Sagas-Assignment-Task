import React from 'react'
import './journey.css'
function Journey() {
    return (
        <div style={{ display: 'flex', justifyContents: 'space-between' }}>
            <div className='journey-section'>
                <div style={{ marginLeft: '-23rem' }}>
                    <div className='fpur-number'>04.</div>
                    <h1 style={{ margin: '-21px', fontSize: '40px', fontFamily: 'math', width: "200px" }}>Journeys that can't be <span>beat </span></h1>
                </div>
            </div>
            <div id='parallelogram'  >

                <iframe title="Video Player" width="520" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                </iframe>
            </div>

        </div>
    )
}

export default Journey