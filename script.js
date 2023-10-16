const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height == '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please give a valid Height ${height}`
    }
    else if(weight == '' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span> YOUR BMI is : ${bmi} </span>`

        
        if(bmi<18.6){
            const p = document.createElement('p');
            p.style.margin="0";
            p.appendChild(document.createTextNode("Under Weight"));
            results.appendChild(p)
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            const p = document.createElement('p');
            p.style.margin="0";
            p.appendChild(document.createTextNode("Normal Weight"));
            results.appendChild(p)
        }
        else{
            const p = document.createElement('p');
            p.style.margin="0";
            p.appendChild(document.createTextNode("over Weight"));
            results.appendChild(p)
        }
    }
    

})