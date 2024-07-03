import React from 'react'
import { useLocation } from 'react-router-dom';

const Back = ({title}) => {
    const location = useLocation();
    return (
        <>
            <section className="back">
                <div className="overlay-back"></div>
                <h1>{title}</h1>
                <h2>Home / Pages / {location.pathname.split('/')[1]}</h2>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Back
