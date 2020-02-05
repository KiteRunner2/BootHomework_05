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
        d.className = "timeblock-inactive";
        console.log(d.value);
    })
    //a.childElementCount;
    //console.log(c)
}
$( '.btn' ).click(( event) => showText(event.target.id));
$( '.timeblock' ).click( (event) => console.log(event.target.id));

greyOut();