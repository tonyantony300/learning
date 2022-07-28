import React from "react";


class footer extends React.Component{
    render(){
        return(
            
            <div className="ui vertical footer segment">
                <div className="ui center aligned container">
                    <div className="ui stackable two column grid">
                        <div className="column">
                            <h4 className="ui header ">Community</h4>
                            <div className="ui link list">
                            <a className="item" href="https://www.transifex.com/organization/semantic-org/" target="_blank">Help Translate</a>
                            <a className="item" href="https://github.com/Semantic-Org/Semantic-UI/issues" target="_blank">Submit an Issue</a>
                            <a className="item" href="https://gitter.im/Semantic-Org/Semantic-UI" target="_blank">Join our Chat</a>
                            <a className="item" href="/cla.html" target="_blank">CLA</a>
                            </div>
                        </div>
                        <div className="column">
                            <h4 className="ui header">Network</h4>
                            <div className="ui link list">
                            <a className="item" href="https://github.com/Semantic-Org/Semantic-UI" target="_blank">GitHub Repo</a>
                            <a className="item" href="http://forums.semantic-ui.com" target="_blank">User Forums</a>
                            <a className="item" href="http://1.semantic-ui.com">1.x Docs</a>
                            <a className="item" href="http://legacy.semantic-ui.com">0.x Docs</a>
                        </div>
                    </div>
                    </div>
                    <div className="ui section divider"></div>
                    <i className="compass outline icon"></i>
                    <div className="ui horizontal small divided link list">
                    <a className="item" href="https://github.com/tonyantony300" target="_blank">created by tony antony</a>
                    </div>
                </div>
              </div>
            
        )
    }
}

export default footer;