$("#open").on("click",function(){
$("body").append(
    `<div id="firstname">`+
    localStorage.getItem("firstname") +
    `</div>`+
    `<div id="lastname">` +
    localStorage.getItem("author")+
    `</div>`
)
});
