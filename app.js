var a = moment().format('dddd, MMMM Do');
$( '#currentDay' ).text(a);
console.log(a);

$( '.btn' ).click(() => console.log('save btn clicked'));
$( '.timeblock' ).click( (event) => console.log(event));