const form = document.querySelector('form')

//agar hum yaha par height or weight ki value lete to page open hote hi script
//run hoti or empty values yaha a jati
// but we want ki form submit hone par hum value le islia humne neeche likha
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === ''|| height<0 || isNaN(height)){
        results.innerHTML = `${height}: is Not a Valid Height Please Give Valid Value`;
    } else if (weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML = `${weight}: is Not a Valid Weight Please Give Valid Value`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //Show the result
        if(bmi<18.6){
            results.innerHTML = `<span>${bmi}: <br> You are Under Weight </span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>${bmi}: <br> You are Fit </span>`;
        }
        else{
            results.innerHTML = `<span>${bmi}: <br> You are Over Weight </span>`
        }
    }
});