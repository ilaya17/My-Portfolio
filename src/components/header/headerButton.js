import React from 'react';
import resume from '../../assets/ilayabharathi.pdf'

const headerButton = () => {
    return (
        <div className='button'>
            <a href={resume} download className='btn'>Download CV </a>
            <a href='#contact ' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default headerButton