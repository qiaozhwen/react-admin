import React from 'react'
import {Link} from "react-router-dom";

export default class Page404 extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%', display:"flex", justifyContent: "center", alignItems: "center"}}>
                <div>
                    <img src={require('../../assests/images/404.png')}/>
                    <p style={{textAlign: "center"}}>
                        <Link to={'/login'}>去登陆</Link>
                    </p>
                </div>
            </div>
        )
    }

}