import React from "react";
function Result(props){
    return(

          <div className="resultcontainer">
            <div>score:{props.score}</div>
            <div>Total score:{props.totalscore}</div>
            </div>

    )
}

export default Result