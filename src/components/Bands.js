import React from 'react';
import Band from './Band'

const Bands = props => {
    
    const renderBands = props.bands.map(band => <Band key={band.id} deleteBand={props.deleteBand} {...band}/>)

    return (
        <div>
            <h1>Bands</h1>
            {renderBands}
        </div>
    )
}

export default Bands;