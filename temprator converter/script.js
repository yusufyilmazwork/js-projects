const celciusEl = document.querySelector("#celcius");
const fahrenheitEl = document.querySelector("#fahrenheit");
const kelvinEl = document.querySelector("#kelvin");

function tempratureConverter (e) {
    
    const currentValue = +e.target.value;


    switch(e.target.id)
    {
        case "celcius":
            fahrenheitEl.value = (currentValue *1.8 +32).toFixed(2);
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            break;
        case "fahrenheit":
            celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celciusEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        
        default:
            break;
        
    }
}

celciusEl.addEventListener("input", tempratureConverter);
fahrenheitEl.addEventListener("input", tempratureConverter);
kelvinEl.addEventListener("input", tempratureConverter);