import React from "react";
import './homepage.styles.scss';

const HomePage = () =>{

    return (<div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Mens</h1>
                    <span className="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Womens</h1>
                    <span className="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <span className="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Cats</h1>
                    <span className="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Bats</h1>
                    <span className="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Rats</h1>
                    <span className="subtitle"></span>
                </div>
            </div>
        </div>
    </div>)
}


export default HomePage;