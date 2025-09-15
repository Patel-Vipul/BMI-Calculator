const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();     //will not direct to the next webpage

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#result");
    const message = document.querySelector("#message");

    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`

    if (bmi<=18.5){
        const tips = [
            "Eat 5–6 smaller meals throughout the day.",
            "Add calorie-dense healthy foods (nuts, seeds, avocado, olive oil, full-fat dairy).",
            "Include protein sources (milk, eggs, chicken, beans, fish) to build muscle.",
            "Try smoothies/shakes with milk, banana, peanut butter.",
            "Do light strength training to convert extra calories into muscle."
        ];
        message.innerHTML = `  <p class="bmi-message">
                <span class="bmi-title">You are underweight. Try to gain weight in a healthy way.</span>
                <ul class="bmi-tips">
                    ${tips.map(tip => `<li>${tip}</li>`).join("")}
                </ul>
            </p>
            `;
    }

    else if(bmi>18.5 && bmi<=24.9){
        const tips =[
            "Maintain a balanced diet (carbs, protein, fats, fiber).",
            "Exercise regularly (mix of cardio and strength).",
            "tay hydrated and sleep well."
        ];
        message.innerHTML = ` <p class="bmi-message">
            <span class="bmi-title">Your weight is Normal. Keep maintaining it!</span>
            <ul class="bmi-tips">
                ${tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
            </p>
        `;
    }

    else if(bmi>25 && bmi<=29.9){
        const tips = [
            "Reduce junk food, fried snacks, and sugary drinks.",
            "Include more vegetables, fruits, and whole grains.",
            "Try portion control and mindful eating.",
            "Do at least 150 minutes of exercise per week."
        ];
         message.innerHTML = ` <p class="bmi-message">
            <span class="bmi-title">You are overweight. Focus on gradual, healthy weight loss!</span>
            <ul class="bmi-tips">
                ${tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
            </p>
        `;
    }

    else if (bmi > 30){
        const tips = [
            "Limit refined carbs, sugary foods, and processed snacks.",
            "Focus on lean proteins, vegetables, and high-fiber foods.",
            "Increase physical activity (start with walking, build up to cardio + strength).",
            "Seek guidance from a doctor or nutritionist if possible."
        ];
        message.innerHTML = ` <p class="bmi-message">
            <span class="bmi-title">You are in the obese category. A structured plan is recommended!</span>
            <ul class="bmi-tips">
                ${tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
            </p>
        `;
    }
});
