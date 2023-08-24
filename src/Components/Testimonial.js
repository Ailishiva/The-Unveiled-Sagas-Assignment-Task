import React from 'react'
import './Testimonals.css'
import Person from './Person'
function Testimonial() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ margin: '40px' }}>
                <h1 style={{ margin: '0px', fontSize: '40px', fontFamily: 'math', }}>Testimonials</h1>
                <div className='red-line'></div>
                <p style={{ fontSize: "14px", width: '384px', textAlign: 'right', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dictum nunc.
                    Curabitur cursus, ligula at congue imperdiet, massa augue feugiat velit, at condimentum
                    risuss non gravida. Suspendisse cursusrus in lorem. Proin eleifend est massa.</p>
                <div>
                    <img className='img-car' src='https://thetrustedtraveller.com/wp-content/uploads/2016/02/thetrustedtravellercom-shutterstock_212451673-56c6ffcc84d39.jpg' alt='car' />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <Person />
                    <Person />
                </div>
                <div>
                    <Person />
                    <Person />
                </div>
            </div>
        </div>
    )
}

export default Testimonial