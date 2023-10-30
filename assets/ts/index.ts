const arr: string[] = [];
document.getElementById("submitBtn")?.addEventListener("click", () => {
    let select = (<HTMLInputElement>document.getElementById("selectOption")).value;

    if (!select) {
        (document.getElementById("error") as HTMLElement).innerHTML = "please selct option";
        return;
    } else {
        (document.getElementById("error") as HTMLElement).innerHTML = "";
    }
    arr.push(select)

    let html: any;
    html = `<ul>`;
    let last = "";
    arr.map((item) => {      
        if (item !== last) {
            html += `</ul><ul>`;
        }
        html += `<li>${item}</li>`;
        last = item;
    })
    html += `</ul>`;
    (document.getElementById("printData") as HTMLElement).innerHTML = html;
})

abc()
 function abc (){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res:any)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);        
    })
}
