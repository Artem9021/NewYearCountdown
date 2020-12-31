window.onload = function () {
    
    let hourText = document.querySelector(".hours");
    let minText = document.querySelector(".minutes");
    let secText = document.querySelector(".seconds");
    
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
    hourText.textContent = addZero(23-hour);
    minText.textContent = addZero(59-minute);
    secText.textContent = addZero(59-second);

    function addZero(arg){
        if (arg<10){
            return "0"+arg;
         }    
         return arg;
    }
    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
    if(year>2020){
        alert("Warning! 2021 had already started. This countdown now shows just the time until midnight.")
    }
    
    setInterval(function () {
        let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
        hourText.textContent = addZero(23-hour);
        minText.textContent = addZero(59-minute);
        secText.textContent = addZero(59-second);


    }, 1000)
}