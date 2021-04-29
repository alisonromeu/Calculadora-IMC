const calculate = document.getElementById('calculate');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(name !== '' && height !== '' && weight !== '') {

        const valueIMC = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (valueIMC <= 18.5) {
            classification = 'Abaixo do peso.';
        } 
        else if (valueIMC <= 25) {
            classification = 'com peso ideal.';
        }
        else if (valueIMC <= 30) {
            classification = 'levemente acima do peso.';
        }
        else if (valueIMC <= 35) {
            classification = 'com obesidade grau I';
        }
        else if (valueIMC <= 40) {
            classification = 'com obesidade grau II.';
        }
        else {
            classification = 'com obesidade grau III.';
        } 

        result.textContent = `${name} seu IMC é ${valueIMC} e você está ${classification}.`;

    } 
    else {
        result.textContent = 'Preencha todos os campos.';
    }
}
    

calculate.addEventListener('click', imc);