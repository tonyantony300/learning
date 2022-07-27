import React from "react";


class header extends React.Component{
    render(){
        return(
            <>
            <div class="ui inverted segment">
            <div class="ui inverted secondary pointing menu">
                <a class="active item">
                    Home 
                    </a>
                <a class="item">
                    Pictures
                </a>
                <a class="item">
                    Videos
                </a>
                <a class="item">
                    News
                </a>
                <a class="item">
                    Wiki
                </a>
                <div class="right menu">
                    <a class="ui item">
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