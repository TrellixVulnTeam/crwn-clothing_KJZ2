import React from "react";
import './homepage.styles.scss'; 

const HomePage = () => (    
    <div className='homepage'>
        <div classnName='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Hats</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>           
                <div className='content'>
                    <h1 className='title'>Jackets</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sneakers</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>


            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
    )

export default HomePage;