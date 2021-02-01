// Login Function on Click

var userObj = [
    {
        userName: 'dennis@gmail.com',
        passWord: 'denis',
    },

    {
        userName: 'kylee@gmail.com',
        passWord: 'denis'
    }
];

function loadHomePage(e) {
    var userName = document.getElementById('userName').value
    var passWord = document.getElementById('passWord').value

    for (var i = 0; i < userObj.length; i++) {
        if((userName === userObj[i].userName) && (passWord === userObj[i].passWord)) {
            window.open("home.html","_self");
        }
    }

}
document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault()
        var userName = document.getElementById('userName').value
    var passWord = document.getElementById('passWord').value
     for (var i = 0; i < userObj.length; i++) {
        if((userName === userObj[i].userName) && (passWord === userObj[i].passWord)) {
            window.open("home.html","_self");
        }
    }
 console.log("submited")
})