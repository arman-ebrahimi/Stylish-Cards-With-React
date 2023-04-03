import {ColorContext} from "./colorContext";

const arrayMaterial = [
    {topic: "AWARDS", icon: "military_tech", score: "2"}, {topic: "MATCHES", icon: "sports_esports", score: "27"},
    {topic: "PALS", icon: "diversity_3", score: "123"}, {topic: "COFFEE", icon: "local_cafe", score: "all_inclusive"}
];

export const InfoSlider = ({slide}) => {
    return(
        <ColorContext.Consumer>
            {({background, color}) => (
                <div className={`info-slider ${slide && 'slideShow'}`}
                     style={{backgroundColor: background, color: color}}>
                    <span className="name1">Jane Doe</span>
                    <div className="grid-box">
                        <div className="item1">Group Name<br />Position/Role</div>
                        <div className="item2">Joined January 2019<br />City, Country</div>
                        {arrayMaterial.map((item, index) => {
                            return(
                                <div key={index} className={`item + ${index + 3}`}>
                                    <p>{item.topic}</p>
                                    <span className="material-icons icon">{item.icon}</span>
                                    <span className={index===3 && "material-icons"}>{item.score}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </ColorContext.Consumer>
    )
}