function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelect").value;
    const resultOutput = document.getElementById("resultOutput");

    if (!isNaN(temperatureInput)) {
        if (unit === "celsius") {
            const fahrenheit = (temperatureInput * 9/5) + 32;
            resultOutput.textContent = `${temperatureInput} °C = ${fahrenheit.toFixed(2)} °F`;
        } else {
            const celsius = (temperatureInput - 32) * 5/9;
            resultOutput.textContent = `${temperatureInput} °F = ${celsius.toFixed(2)} °C`;
        }
    } else {
        resultOutput.textContent = "Invalid input";
    }
}

const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);
