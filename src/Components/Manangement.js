import React from 'react'

function Manangement() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ margin: '60px' }}>
                <img width={800} height={350} src='https://img.freepik.com/premium-vector/white-paper-earth-3d-map-vector-template-business-infographic_53562-4075.jpg?w=2000' alt='map' />
            </div>
            <div >
                <div className='one-number'>05.</div>
                <h1 style={{ margin: '0px', fontSize: '40px', width: '300px', fontFamily: 'math', }}>New Age Destination Manangement</h1>
                <p style={{ fontSize: "14px", width: '384px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dictum nunc.
                    Curabitur cursus, ligula at congue imperdiet, massa augue feugiat velit, at condimentum
                    risus erat sit amet leo. sa purus in lorem. Proin eleifend est massa.</p>

            </div>
        </div>
    )
}

export default Manangement