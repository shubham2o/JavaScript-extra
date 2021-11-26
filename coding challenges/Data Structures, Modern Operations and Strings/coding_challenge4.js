"use strict";

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector("button").addEventListener("click", function() {
    const text = document.querySelector("textarea").value;
    console.log(text);
})