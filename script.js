const form = document.querySelector("form");

// this usecase will give empty
// const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
    } else {
        const BMI = parseInt(weight / ((height * height)/10000)).toFixed(2);
        // show the result
        const bmi = parseInt(BMI);
        if (bmi < 18.6) {
            
            results.innerHTML = `<span>  BMI = ${BMI} </span> <br> Your BMI is Under Weight..! You should take care of your health. `
        } else if(bmi > 18.6 && bmi < 24.9){
            
            results.innerHTML = `<span>BMI =  ${BMI} </span> <br> Your BMI is Normal... Have fun!`
        } else {
            
            results.innerHTML = `<span> BMI = ${BMI} </span> <br> Your BMI in Overweight ... You should go on diet & try to loose your weight. `
        }
        
    }

    
})