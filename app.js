let button = document.getElementById('button');

button.addEventListener('click', function (){
    let myWindows = window.open('https://www.fbi.gov/');
    let features = "menubar=no, scrollbars=no, width = 500, height=500, status= no, toolbar=no";
    myWindows.resizeTo(300, 300);
    myWindows.moveTo(500, 500);

    button2.addEventListener('click', function (){
        myWindows.close();
    })
})

let button2 = document.getElementById('button2');
