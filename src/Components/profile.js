import {ColorContext} from "./colorContext";

export const Profile = () => {
    return(
        <ColorContext.Consumer>
            {({background}) => (
                <div className="profile" style={{backgroundColor: background}}>
                    <div>LEVEL 13</div>
                    <img src="/user.jpg" alt="profile" width="70%" />
                    <div>5,312 POINTS</div>
                </div>
            )}
        </ColorContext.Consumer>
    )
}