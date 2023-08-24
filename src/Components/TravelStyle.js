import React from 'react'
import './TravelStyle.css'
function TravelStyle() {
    return (
        <div className='travel-container'>
            <div>
                <h1 style={{ margin: '0px', fontSize: '40px', fontFamily: 'math', textTransform: 'uppercase' }}>Travel Styles</h1>
                <div className='three-number'>03.</div>
                <div className='red-line'></div>
                <p style={{ fontSize: "14px", width: '384px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dictum nunc.
                    Curabitur cursus, ligula at congue imperdiet, massa augue feugiat velit, at condimentum
                    risus erat sit amet leo. Etiam scelerisque eros vitae imperdiet porttitor. Duis ullamcorper\
                    posuere ultrices. Aenean tincidunt feugiat diam, convallis fermentum eros vulputate vel. Cras
                    feugiat porta magna, vitae accumsan arcu sodales eget. Vivamus odio justo, eleifend vitae libero
                    nec, accumsan lobortis lorem. Nam nibh justo, posuere vel vestibulum eu, rutrum id justo.
                    Curabitur tempor ac lacus non gravida. Suspendisse cursus, risus eget ornare fringilla,
                    nibh nunc cursus quam, et congue massa purus in lorem. Proin eleifend est massa.</p>
                <i id='save' class="fa fa-save" ></i>
                <button className='readmor'>Read More</button>
            </div>
            <div>
                <div style={{ marginLeft: '-75px' }}>
                    <img className='travelgif1' src='https://media.tenor.com/3i-xnbVjRkwAAAAM/family-vacation.gif' alt='family' />
                    <img className='travelgif2' src='https://24.media.tumblr.com/d453b4f9e340ce80972b4c9ac6cbdd71/tumblr_mgq60z8Y5G1s3tn99o1_500.gif' alt='private' />
                </div>
                <div>
                    <img className='travelgif3' src='https://i.gifer.com/CAmp.gif' alt='business' />
                    <img className='travelgif4' src='https://www.smu.edu/-/media/Site/Meadows/NewsStories/2013/BrownBagGifs/BBdancegifs_1.gif' alt='groups' />
                </div>
            </div>
        </div>
    )
}

export default TravelStyle