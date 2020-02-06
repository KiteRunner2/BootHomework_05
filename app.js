let init = (initF = () => {

    const weekDay = moment().format('dddd, MMMM Do');
    const timeCurrent = moment().format('HH:MM');
    const hourCurrent = moment().format('HH');
    $( '#currentTime').text(timeCurrent);
    $( '#currentDay' ).text(weekDay);

    return {
        dayofWeek : weekDay,
        currentTime : timeCurrent,
        currentHour : hourCurrent
    }


})();


function showText(id) {
    //debugger;
    let idt = 'id_' + id;
    console.log(idt);
    console.log($( `#${idt}`).val());
}

function greyOut(hour){
    let a = document.getElementById('container');
    let b = a.children;
    let c = Array.from(b)
    //console.log(c)
    c.forEach(value => {
        let d = value.children[1];
        let tt = Number(d.id.slice(3));
        console.log(tt,init.currentHour,tt<init.currentHour);
        if (tt == Number(init.currentHour)) {
            d.className = "timeblock-current";
            d.placeholder = "What is your task?";
        } 
        else {
        tt < Number(init.currentHour) ? d.disabled=true:d.className = "timeblock";
        }
        
        
        //console.log(d.value);
    })
    //a.childElementCount;
    //console.log(c)
}

function aInit(){
    let data = ['id','text'];
    localStorage.setItem('calendar',JSON.stringify(data));
}

function Load(){


}

function Save(){


}

function Reset(){


}


$( '.btn' ).click(( event) => showText(event.target.id));
$( '.timeblock' ).click( (event) => console.log(event.target.id));

greyOut();