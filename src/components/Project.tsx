import React from "react";
import my808 from '../assets/images/808.jpg';
import co from '../assets/images/co.jpeg';
import sam from '../assets/images/S.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://store.steampowered.com/app/3209690/808/" target="_blank" rel="noreferrer"><img src={my808} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.steampowered.com/app/3209690/808/" target="_blank" rel="noreferrer"><h2>808</h2></a>
                <p>Written, designed and developed a first person narrative-driven experience in Unity with C#, similar to titles such as Firewatch, The Stanley Parable, Superliminal. Will be released late 2025</p>
            </div>
            <div className="project">
                <a href="https://store.steampowered.com/app/3578070/Shake_it_Co/" target="_blank" rel="noreferrer"><img src={co} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.steampowered.com/app/3578070/Shake_it_Co/" target="_blank" rel="noreferrer"><h2>Shake it Co!</h2></a>
                <p>Designed and developed cozy gardening game similarr to titles such as Stardew Valley and Forager. Demo is out now on Steam!</p>
            </div>
            <div className="project">
                <a href="https://github.com/EEXimium/Suspicious-Activity-Monitor" target="_blank" rel="noreferrer"><img src={sam} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/EEXimium/Suspicious-Activity-Monitor" target="_blank" rel="noreferrer"><h2>Suspicious Activity Monitor</h2></a>
                <p>Developed a system that detects dangerous objects using a camera and notifies user with a mobile app. System is using specificly trained YoloV11 object detection model which uploads a screenshot of the livestream whenever an dangerous object is detected, with python livestreaming it to the mobile app which is developed with Swift and has access to Firebase database</p>
            </div>
        </div>
    </div>
    );
}

export default Project;