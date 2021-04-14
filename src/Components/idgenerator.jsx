import React from "react"

function idGenerator(){
    return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 16);
}


export default idGenerator