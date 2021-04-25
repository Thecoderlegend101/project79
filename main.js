var menulist = ['Chicken Tandoori Pizza', 
'Deluxe Veggie Pizza', 
'Paneer Tikka Pizza', 
'Veg Extravaganza Pizza', 
'Veg Supreme Pizza']
function getmenu() {
    var htmldat;
    htmldat = "<ol id='menlist'>"
    menulist.sort()
    for (var i = 0; i < menulist.length; i++) {
        htmldat = htmldat + '<li>' + menulist[i] + '</li>'
    }
    htmldat= htmldat + '</ol>'
    document.getElementById('list1place').innerHTML = htmldat;
    

}
function addmen() {
    var htmldata;
    var iteme = document.getElementById('add_item').value;
    menulist.push(iteme)
    menulist.sort()
    htmldata = '<section class="cards">'
    for (k = 0; k < menulist.length; k++) {
    
            htmldata = htmldata + '<div style="background-color: wheat;flex: 0 0 30%;box-sizing: border-box;color:black;margin: 0.5rem .18em;align-items: center;font-size: medium;">' 
            + '<img src="pizzaImg.png"  width="100px", height="80px">' + menulist[k] + '</div>'
    }
    htmldata = htmldata + '</section'
    document.getElementById('addmen').innerHTML = htmldata;
}




