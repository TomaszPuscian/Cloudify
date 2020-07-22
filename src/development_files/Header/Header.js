import React from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';
import "../../images/1399995805.svg"

const Header = () => {
    return (
        <>
            <header>
                <span className="img--header"/>
                <div className="header--container">
                    <h1 className="logo">CLOUDIFY</h1>
                    <h3 id="sub-logo">Find best music for your current weather</h3>
                </div>
                <Button variant="success" className="connect-user--button">Connect with your account</Button>
            </header>
        </>
    )
}

export {Header}