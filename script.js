function convertTemperature() {
        
    var inputValue = parseFloat(document.getElementById("temperatureInput").value);

    
    var selectedUnit = document.getElementById("cars").value;


    var convertedValue1 = "";
    var convertedValue2 = "";
    var convertedValue3 = "";

    if (selectedUnit === "celsius") {
        convertedValue1 = inputValue;
        convertedValue2 = (inputValue * 9/5) + 32;
        convertedValue3 = inputValue + 273.15;
    } else if (selectedUnit === "fahrenheit") {
        convertedValue1 = (inputValue - 32) * 5/9;
        convertedValue2 = inputValue;
        convertedValue3 = (inputValue - 32) * 5/9 + 273.15;
    } else if (selectedUnit === "kelvin") {
        convertedValue1 = inputValue - 273.15;
        convertedValue2 = (inputValue - 273.15) * 9/5 + 32;
        convertedValue3 = inputValue;
    }
    
    document.getElementById("convertedValue1").textContent = convertedValue1.toFixed(2);
    document.getElementById("convertedValue2").textContent = convertedValue2.toFixed(2);
    document.getElementById("convertedValue3").textContent = convertedValue3.toFixed(2);
    
}