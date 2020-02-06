let init = (initF = () => {

    const weekDay = moment().format('dddd, MMMM Do');
    const timeCurrent = moment().format('HH:MM');
    //const hourCurrent = moment().format('HH');
    const hourCurrent = 11;
    $( '#currentTime').text(timeCurrent);
    $( '#currentDay' ).text(weekDay);

    /*
    function storageInit(){
        let data = ['text'];
        localStorage.setItem('calendar',JSON.stringify(data));
    }
    */
   Load();
    //Save();
    //storageInit();
    return {
        dayofWeek : weekDay,
        currentTime : timeCurrent,
        currentHour : hourCurrent
    }


})();

/*
function showText(id) {
    //debugger;
    let idt = 'id_' + id;
    console.log(idt);
    console.log($( `#${idt}`).val());
}
*/


function greyOut(){
    let containerBox = document.getElementById('container');
    let children = containerBox.children;
    let childrenArray = Array.from(children)
    //console.log(c)
    childrenArray.forEach(value => {
        let timeblock = value.children[1];
        let timeblockId = Number(timeblock.id.slice(3));
        //console.log(tt,init.currentHour,tt<init.currentHour);
        if (timeblockId == Number(init.currentHour)) {
            timeblock.className = "timeblock-current";
            timeblock.placeholder = "What is your task?";
        } 
        else {
        timeblockId < Number(init.currentHour) ? timeblock.disabled=true:timeblock.className = "timeblock";
        }
        
        
        //console.log(d.value);
    })
    //a.childElementCount;
    //console.log(c)
}



function Load(){
    let inputs;
    if (localStorage.getItem('calendar') != null){
        inputs = JSON.parse(localStorage.getItem('calendar'));
    }
    else return;
    //let inputs = JSON.parse(localStorage.getItem('calendar'));
    let divs = Array.from(document.getElementById('container').children);
    divs.forEach((value,key) => {
        value.children[1].value = inputs[key];
        //console.log(value,key);
    })
    //console.log(divs);
    //console.log(inputs);
}

function Save(){
    let inputValues = []
    let divs = Array.from(document.getElementById('container').children);
    divs.forEach(value => {
        console.log(value.children[1].value);
        inputValues.push(value.children[1].value);
    });
    console.log(inputValues);
    localStorage.setItem('calendar',JSON.stringify(inputValues));
}

function Reset(){


}


$( '.btn' ).click(Save);
//$( '.timeblock' ).click( (event) => console.log(event.target.id));
$( '.timeblock').keyup((event) => {
    if (event.keyCode == 13) Save();
});

greyOut();
Load();