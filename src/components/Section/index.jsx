import React from "react";

export function Section(props){
    // console.log(props.component)
    return <div>{props.component()}</div>
}