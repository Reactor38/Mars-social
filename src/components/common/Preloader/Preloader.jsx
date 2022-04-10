import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

let Preloader = (props) => {
    return <div style={{ backgroundColor: 'white' }}>
        <img src={preloader} alt='loading' />
    </div>
}

export default Preloader;