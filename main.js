var list=["Classic_Pizza",
    "Deluxe_Pizza",
    "Farm_House_Pizza",
    "Cheese_And_Corn_Pizza"];
function show_menu(){
    console.log("inside show menu")
    var htmldata;
    htmldata="<ol class='menulist'>"
 for(var i = 0; i < list.length; i++){
    htmldata=htmldata+'<li>' + list[i] + '</li>'
 }
 htmldata= htmldata+"</ol>"
 document.getElementById("display_menu").innerHTML = htmldata
}