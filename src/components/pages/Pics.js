import React from "react";
import { connect } from "react-redux";
import {fetchPics} from '../../actions/index'



class Pics extends React.Component{

    state = { term: ''}

    componentDidMount (){
        
        const {term} = this.state.term
        this.props.fetchPics(term);
       
        
    }
  
    render(){

        console.log(this.props.pics);
        return(
       
            // <input  value={this.state.term} onChange={e=>{this.setState({term: e.target.value})}}/>
           
            <div className="ui raised secondary segment">
                <div className="ui segment">
                        <form className="ui form" onSubmit={e=>{e.preventDefault(); console.log(this.state.term)}}> 
                             <div className="field" >
                                 <label>type here!!</label> 
                                 <input type='text' value={this.state.term} onChange={e=>{this.setState({term: e.target.value})}}/>
                                 
                                 <br/><br/>
                                 <button className="ui secondary button" style={{textAlign: 'right'}}>submit</button>       
                            </div>
                        </form>
                 </div>
                 <div className="ui medium rounded images" >
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
       

                        <br></br>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
                     

                        <br></br>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>

                        <br></br>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
                        <img src="/images/women.jpg"/>
                        
                 </div>
            </div>

          
        )
        
    }
}

const mapStateToProps = (state) => {
    return { pics: state.pics}
}

export default connect(mapStateToProps,{fetchPics})(Pics);