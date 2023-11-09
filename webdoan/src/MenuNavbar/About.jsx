import React, { Fragment, useState } from "react";
import "../MenuNavbar/about.scss"  
import Footer from "../pages/Footer/Footer";

const About = () => {

    const [toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) => {
        setToggleTab(index)
    }
    return (
        <Fragment>
           <section className="about" style={{backgroundColor:'#e5f1fc'}}>
                <div className="row">
                    <div className="column">
                        <div className="about-img"></div>
                    </div>
                    <div className="column">
                        <div className="tabs">
                            <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
                                onClick={() => toggleState(1)}
                            >
                                <h2>About</h2>
                            </div>

                            <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
                                onClick={() => toggleState(2)}
                            >
                                <h2>Skills</h2>
                            </div>

                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                                onClick={() => toggleState(3)}
                            >
                                <h2>Experience</h2>
                            </div>
                        </div>
                        <div className="tan-content">
                            {/* About content */}

                            <div className={toggleTab === 1 ?  "content active-content":"content"}>
                                <h2>My story</h2>
                                <p>Hello Everyone. My Name is NamPhung. i am developer frontend using reactjs</p>
                                <h3>i am developer frontend using reactjs</h3>
                                <p>What do you want to do today?. I don't want to do anything. The weather is great outside.</p>
                            </div>

                            {/* Skills Content */}

                            <div className={toggleTab === 2 ?  "content active-content":"content"}>
                                <h2>My Skills</h2>
                                <p>Hello Everyone. My Name is NamPhung. i am developer frontend using reactjs</p>
                                <div className="skills-row">
                                    <div className="skills-colums">
                                        <div className="progress-wrap">
                                            <h3>Developer</h3>
                                            <div className="progress">
                                                <div className="progress-bar">
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-colums">
                                        <div className="progress-wrap">
                                            <h3>Designer</h3>
                                            <div className="progress">
                                                <div className="progress-bar Designer">
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-colums">
                                        <div className="progress-wrap">
                                            <h3>JavaScrip</h3>
                                            <div className="progress">
                                                <div className="progress-bar JavaScrip">
                                                    <span>88%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-colums">
                                        <div className="progress-wrap">
                                            <h3>PhotoShop</h3>
                                            <div className="progress">
                                                <div className="progress-bar PhotoShop">
                                                    <span>85%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Experience content */}

                            <div className={toggleTab === 3 ?  "content active-content":"content"}>
                                <div className="exp-column">
                                    <h3>Web Developer</h3>
                                    <span>2023-2024</span>
                                    <p>hello xin chao tat ca moi nguoi. chao mung moi nguoi da den voi website vip nhat viet nam</p>
                                </div>

                                <div className="exp-column">
                                    <h3>Graphic Designer</h3>
                                    <span>2023-2024</span>
                                    <p>hello xin chao tat ca moi nguoi. chao mung moi nguoi da den voi website vip nhat viet nam</p>
                                </div>

                                <div className="exp-column">
                                    <h3>PhotoShop</h3>
                                    <span>2023-2024</span>
                                    <p>hello xin chao tat ca moi nguoi. chao mung moi nguoi da den voi website vip nhat viet nam</p>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
                
           </section>
           <div>
                    <Footer/>
                </div>
        </Fragment>
    )
}

export default About;