import React, { ReactElement } from 'react';
import { Button } from 'semantic-ui-react';

import Navbar from '../../components/Navbar';
import './style.scss';


const About = (): ReactElement => (
    <>
        <Navbar />
        <div className="about-main">
            <div className="text">
                <h1>Take Control of the Information you see</h1>
                <p>With Polario you can ensure you know the backstory
                    of anything you read on the internet.
                </p>
                <Button href="">Download the Extension</Button>
                <Button onClick={() => window.scroll({ top: window.innerHeight, behavior: 'smooth' })} color="blue">Learn More</Button>
            </div>

            <div className="image">
                <p>Place-Holder for image of extension</p>
            </div>
        </div>

        <div className="about-below">
            <h1>Information on the Internet can be confusing, we make it simple!</h1>
            <p>With polario</p>
        </div>
    </>
)

export default About;