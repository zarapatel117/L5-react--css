import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class mystyling extends React.Component{
   render(){
    return(
        <div>
            <h1 className="myheaderstyle">HI</h1>
            <h1 className="mystyle">How are you</h1>
        </div>
    );
   }
}

ReactDOM.render(<mystyling/>,document.getElementById("root"))