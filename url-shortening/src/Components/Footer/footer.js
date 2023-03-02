import React from "react";



export function Footer(props){
    return(
        <div className="footer_cover">
            <h3 className="title">{props.title}</h3>
            <ul>
                <li>{props.desc1}</li>
                <li>{props.desc2}</li>
                <li>{props.desc3}</li>
            </ul>

        </div>
    )
}

export default Footer;