"use strict";
var _a;
const arr = [];
(_a = document.getElementById("submitBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    let select = document.getElementById("selectOption").value;
    if (!select) {
        document.getElementById("error").innerHTML = "please selct option";
        return;
    }
    else {
        document.getElementById("error").innerHTML = "";
    }
    arr.push(select);
    let html;
    html = `<ul>`;
    let last = "";
    arr.map((item) => {
        if (item !== last) {
            html += `</ul><ul>`;
        }
        html += `<li>${item}</li>`;
        last = item;
    });
    html += `</ul>`;
    document.getElementById("printData").innerHTML = html;
});
abc();
function abc() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    });
}
