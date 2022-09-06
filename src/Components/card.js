import {Information} from "./information";
import {InfoSlider} from "./infoSlider";
import {useState} from "react";
import {Profile} from "./profile";

export const Card = () => {
    const [slide, setSlide] = useState(false);
    const showSlide = () => {
        setSlide(true);
    }
    const hideSlide = () => {
        setSlide(false);
    }

    return(
        <div className="card" onMouseOver={showSlide} onMouseLeave={hideSlide}>
            <Profile />
            <div className="more">
                <Information />
                <InfoSlider slide={slide} />
            </div>
        </div>

    )
}