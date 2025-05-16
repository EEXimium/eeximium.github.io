import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faLaptopCode, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Git",
    "Github",
    "Unity",
    "C#",
    "Unreal Engine",
    "C++",
    "FMOD",
    "Visual Studio",
    "VS Code"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Python",
    "PyTorch",
    "Flask",
    "OpenCV",
    "Swift",
    "SwiftUI",
    "Firebase",
    "Ultralytics YOLO",
    "XCode",
    "MySQL",
    "Java",
    "C",
    "H2 Database",
    "Spring Boot",
    "Postman"
];

const labelsThird = [
    "Premiere Pro",
    "Audacity"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Game Development</h3>
                    <p>I am a passionate game developer with experience in creating games in difficult conditions. I have participated in various game jams, collaborating with teams to develop innovative projects under tight deadlines. My focus is on crafting immersive and memorable gaming experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Technical Skills & Experience</h3>
                    <p>I have hands-on experience with artificial model training, combining computer vision, mobile app development, and backend integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFilm} size="3x"/>
                    <h3>Extras</h3>
                    <p>Proficient in video editing with Adobe Premiere and audio processing with Audacity.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;