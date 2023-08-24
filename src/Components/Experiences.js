import React from 'react'
import './Experiences.css'
function Experiences() {
    return (
        <div>
            <div className='experience-section'>
                <div style={{ padding: '30px' }}>
                    <span><img id='exp-gif1' src='https://media.tenor.com/1itNGd2QkPIAAAAC/deer-kiss-wild-animals.gif' alt='wildlife' /></span>
                    <img id='exp-gif2' src='https://media.tenor.com/FuBK3Ed6Eb4AAAAC/skydive-skydiving.gif' alt='diversity' />
                    <img id='exp-gif3' src='https://i.kym-cdn.com/photos/images/newsfeed/002/045/415/1e0.gif' alt='time for opp' /> <br />
                    <img id='exp-gif4' src=' https://thumbs.gfycat.com/FearlessTastyBeetle-max-1mb.gif' alt='culture' />
                    <span><img id='exp-gif5' src='https://images.adsttc.com/media/images/5f33/f79a/b357/65af/4e00/020b/original/01_Hatra-Reconstruction.gif?1597241233' alt='history' /></span>
                </div>

                <div >
                    <p><span className='one-number'>02.</span><span style={{ fontSize: '40px', fontFamily: 'math', textTransform: 'uppercase' }}>Experiences</span></p>
                    <div className='red-lin'></div>
                    <p style={{ fontSize: '15px', width: '384px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enirequires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href,
                        but still need the element to resemble a link, use a bum</p>
                    <button className='readmor'>Read More</button>
                    <i id='save' class="fa fa-save" ></i>

                </div>

            </div>
        </div>
    )
}

export default Experiences