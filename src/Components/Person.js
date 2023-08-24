import React from 'react'

function Person() {
    return (
        <div style={{ margin: '20px' }}>
            <img style={{ width: '70px', height: '60px', borderRadius: '50%' }} src='https://st.depositphotos.com/1224365/2498/i/450/depositphotos_24980077-stock-photo-portrait-of-a-normal-man.jpg' alt='person' />
            <h6>ANDESH SHARMA</h6>
            <div className='red-line'></div>
            <p style={{ fontSize: "14px", width: '384px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dictum nunc.
                Curabitur cursus, ligula at congue imperdiet, morem. Proin eleifend est massa.</p>

        </div>
    )
}

export default Person