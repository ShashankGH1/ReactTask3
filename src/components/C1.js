import {Component} from "react";
class C1 extends Component{
    constructor(props){
        super(props);
        this.state={bool:false}
    }
    ColorList=()=>{
        return this.props.colors.map((val)=>{
            return(
                <button style={val} onClick={()=>this.handleColorPick(val)}></button>
            )
        })
    }
    handleClick=()=>{
        this.setState({
            bool:!this.state.bool
        })
    }
    handleColorPick=(val)=>{
        this.setState({
            bool:!this.state.bool
        });
        document.body.style.backgroundColor = val.backgroundColor;
    }
    render(){
        return(
            <div align="center">
                {this.state.bool
                &&
                <div>
                    {this.ColorList()}
                </div>}
                {!this.state.bool
                &&
                <div>
                    <button onClick={this.handleClick} class="b">Pick a color</button>
                </div>}
            </div>
        )
    }
}
export default C1;
