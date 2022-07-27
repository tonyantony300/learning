import React from "react";


class footer extends React.Component{
    render(){
        return(
            
            <div class="ui vertical footer segment">
                <div class="ui center aligned container">
                    <div class="ui stackable two column grid">
                        <div class="column">
                            <h4 class="ui header ">Community</h4>
                            <div class="ui link list">
                            <a class="item" href="https://www.transifex.com/organization/semantic-org/" target="_blank">Help Translate</a>
                            <a class="item" href="https://github.com/Semantic-Org/Semantic-UI/issues" target="_blank">Submit an Issue</a>
                            <a class="item" href="https://gitter.im/Semantic-Org/Semantic-UI" target="_blank">Join our Chat</a>
                            <a class="item" href="/cla.html" target="_blank">CLA</a>
                            </div>
                        </div>
                        <div class="column">
                            <h4 class="ui header">Network</h4>
                            <div class="ui link list">
                            <a class="item" href="https://github.com/Semantic-Org/Semantic-UI" target="_blank">GitHub Repo</a>
                            <a class="item" href="http://forums.semantic-ui.com" target="_blank">User Forums</a>
                            <a class="item" href="http://1.semantic-ui.com">1.x Docs</a>
                            <a class="item" href="http://legacy.semantic-ui.com">0.x Docs</a>
                        </div>
                    </div>
                    </div>
                    <div class="ui section divider"></div>
                    <i class="compass outline icon"></i>
                    <div class="ui horizontal small divided link list">
                    <a class="item" href="https://github.com/tonyantony300" target="_blank">created by tony antony</a>
                    </div>
                </div>
              </div>
            
        )
    }
}

export default footer;