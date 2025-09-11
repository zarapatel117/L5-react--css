import React from "react"
import ReactDOM from "react-dom"
class mystyling extends React.Component{
    render() {
        const myheaderstyle={
            color:"green",
            backgroundColor:"skyblue",
            fontFamily:"Arial",
            padding:"2px"
        };
        const mystyle={
            color:"pink",
            backgroundColor:"blue",
            fontFamily:"Times New Roman",
            padding:"2px"
        };
        return(
            <div>
                <h1 style={myheaderstyle}>Hi</h1>
                <h1 style={mystyle}>How are you</h1>
            </div>
        )
    }
}
ReactDOM.render(<mystyling/>,document.getElementById("root"))