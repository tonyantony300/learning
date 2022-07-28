import React from "react";
import {Link} from 'react-router-dom';


class header extends React.Component{
    render(){
        return(
            <>
            <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <Link to='/home' className="active item">
                    Home 
                    </Link>
                <Link to='/pics' className="item">
                    Pictures
                </Link>
                <Link to='/videos' className="item">
                    Videos
                </Link>
                <Link to ='/news' className="item">
                    News
                </Link>
                <Link to='/wiki' className="item">
                    Wiki
                </Link>
                <div className="right menu">
                    <a className="ui item">
                    Login
                    </a>
                </div>
            </div>

            </div>
            </>
        )
    }
}

export default header;