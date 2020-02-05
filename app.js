const dayofWeek = moment().format('dddd, MMMM Do');
$( '#currentDay' ).text(dayofWeek);

const currentTime = moment().format('HH:MM');
const currentHour = moment().format('HH');
$( '#currentTime').text(currentTime);
console.log(currentHour);

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
        console.log(tt,currentHour,tt<currentHour);
        if (tt == Number(currentHour)) {
            d.className = "timeblock-current";
            d.placeholder = "What is your task?";
        } 
        else {
        tt < Number(currentHour) ? d.className = "timeblock-inactive":d.className = "timeblock";
        }
        
        
        //console.log(d.value);
    })
    //a.childElementCount;
    //console.log(c)
}

function Init(){
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