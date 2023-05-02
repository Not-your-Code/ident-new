import { useState, useEffect } from "react";
import './FirstSegment.css'



import backgroundImage1 from '../../Assests/sliders/1.jpg';
import backgroundImage2 from '../../Assests/sliders/2.jpg';


export default function Introduction() {

    const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);
    const [IntroString, setIntroString] = useState("Best Care For Dental Health")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(backgroundImage === backgroundImage1 ? backgroundImage2 : backgroundImage1);
            if (IntroString === "Best Care For Dental Health") {
                setIntroString("Vibrant Smile For Healthy Lifestyle")
            } else {
                setIntroString("Best Care For Dental Health")
            }

        }, 8000);

        return () => clearInterval(intervalId);
    }, [backgroundImage]);

    return (
        <>
           <div className="Introduction">
                <div className='container  intro' >
                    <div className="BodyIntro">
                        {/* <div id="SubTitleDiv">
                            <h3 >The Best Medical and General Practise Care</h3>
                        </div> */}
                        <div id="MainTitleDiv">
                            <h1 className="Title titles">{IntroString}</h1>
                        </div>
                        <div id="TextDiv">
                            <p id="TextIntro">  The health and well-being of our patients and their health care team will
                                always be our priority, so we follow the best practices for cleanliness.
                            </p>
                        </div>
                        <div className="buttonsDiv">
                            <button className="services buttonIntro">Our Services</button>
                            <button className="aboutBtn buttonIntro">More About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

