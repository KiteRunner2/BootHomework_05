let init = (function initF(){

    const weekDay = moment().format('dddd, MMMM Do');
    const timeCurrent = moment().format('HH:MM');
    const hourCurrent = moment().format('HH');

    $( '#currentTime').text(timeCurrent);
    $( '#currentDay' ).text(weekDay);
    $( '.btn' ).click(Save);
    $( '.timeblock').keyup((event) => {
        if (event.keyCode == 13) Save();
        });

    function Save(){
        let inputValues = [];
        let divs = Array.from(document.getElementById('container').children);
        divs.forEach(value => {
            inputValues.push(value.children[1].value);
        });
        localStorage.setItem('calendar',JSON.stringify(inputValues));
    };

    function Load(){
        let inputs;
        if (localStorage.getItem('calendar') != null){
            inputs = JSON.parse(localStorage.getItem('calendar'));
        }
        else return;
        
        let divs = Array.from(document.getElementById('container').children);
        divs.forEach((value,key) => {
            value.children[1].value = inputs[key];
            
        })
        
    };

    function greyOut(){
        let divs = Array.from(document.getElementById('container').children);
        divs.forEach(value => {
            let timeblock = value.children[1];
            let timeblockId = Number(timeblock.id.slice(3));
            if (timeblockId == Number(hourCurrent)) {
                timeblock.className = "timeblock-current";
                timeblock.placeholder = "What is your task?";
            } 
            else {
                timeblockId < Number(hourCurrent) ? timeblock.className="timeblock-inactive":timeblock.className = "timeblock";
            }
        });
    };
    
    return {
        greyOut : greyOut,
        Load : Load
    };
})();

init.greyOut();
init.Load();

