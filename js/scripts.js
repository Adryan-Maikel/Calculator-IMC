//Header
var title;

title = window.document.getElementById("title");
title.addEventListener("click", ()=>{
    document.location.reload(true);
});

//Inputs
var inputHeight, inputWeight;
var height, weight;

inputHeight = window.document.getElementById("height");
inputHeight.addEventListener("focusout", ()=>{
    checkInputs(inputHeight, inputHeight.value);
});


inputWeight = window.document.getElementById("weight");
inputWeight.addEventListener("focusout", ()=>{
    checkInputs(inputWeight, inputWeight.value);
});

function checkInputs(input, inputValue){
    var boxInput, span;

    boxInput = input.parentNode;
    boxInput.className = "box-input";

    span = boxInput.children[4];
    span.innerHTML = "";

    if(inputValue.length == 0){
        input.value = "";
        boxInput.classList.add("error");
        input.focus();
        span.innerHTML = "PREENCHA ESTE CAMPO!";
    }else if(inputValue < 1){
        input.value = "";
        boxInput.classList.add("error");
        input.focus();
        span.innerHTML = "INSIRA UM VALOR VÁLIDO!";
    }else if(isNaN(inputValue)){
        input.value = "";
        boxInput.classList.add("error");
        input.focus();
        span.innerHTML = "INSIRA APENAS NÚMEROS!";
    }else{
        if(input.id == "height"){
            // console.log(input.id);
            height = inputValue.replace(/(\d{1})(\d{2})/, "$1.$2");
            if(height > 2.4){
                input.value = "";
                boxInput.classList.add("error");
                input.focus();
                span.innerHTML = "INSIRA UMA ALTURA VÁLIDA!"; 
            }else if(height.length != 4){
                input.value = "";
                boxInput.classList.add("error");
                input.focus();
                span.innerHTML = "INSIRA UMA ALTURA VÁLIDA!"; 
            }else{
                boxInput.classList.add("success");
                input.value = height;
            }
        }else if(input.id == "weight"){
            // console.log(input.id);
            weight = inputValue;
            if(weight > 300
            || weight < 10
            || weight.length > 6){
                input.value = "";
                weight = undefined;
                boxInput.classList.add("error");
                input.focus();
                span.innerHTML = "INSIRA UM PESO VÁLIDO!";
            }else if(weight.length == 2){
                weight += "00";
                weight = weight.replace(/(\d{2})(\d{2})/, "$1.$2");
                boxInput.classList.add("success");
                input.value = weight;
            }else if(weight.length == 3){
                weight += "00";
                weight = weight.replace(/(\d{3})(\d{2})/, "$1.$2");
                boxInput.classList.add("success");
                input.value = weight;
            }else if(weight.length == 4){
                weight = weight.replace(/(\d{2})(\d{2})/, "$1.$2");
                boxInput.classList.add("success");
                input.value = weight;
            }else if(weight.length == 5){
                weight = weight.replace(/(\d{3})(\d{2})/, "$1.$2");
                boxInput.classList.add("success");
                input.value = weight;
            }
        }else{
            window.alert("Algo deu errado!");
        }
    }
}

//Sections
var sectionInputs, sectionResult;

sectionInputs = window.document.getElementById("inputs");
sectionResult = window.document.getElementById("result");

//Buttons
var buttonCalculate, buttonCancel;

buttonCalculate = window.document.getElementById("calculate");
buttonCalculate.addEventListener("click", ()=>{
    if(height == undefined
    || height == ""
    || height == null){
        inputHeight.focus();
        return
    }
    if(weight == undefined
    || weight == ""
    || weight == null){
        inputWeight.focus();
        return
    }
    var imc, resultImc;
    imc = Number(weight/(height*height)).toFixed(2);

    resultImc = window.document.getElementById("imc");
    resultImc.innerHTML = imc.replace(".",",");

    if(imc < 18.5){
        // console.log("Baixo peso");
        sectionResult.style.backgroundColor = "#77a3c5";
        sectionResult.style.color = "#fff";
        sectionResult.style.boxShadow = "0 0 10px 20px #77a3c5";
    }else if(imc < 24.9 && imc > 18.5){
        // console.log("Normal");
        sectionResult.style.backgroundColor = "#73a77e";
        sectionResult.style.color = "#fff";
        sectionResult.style.boxShadow = "0 0 10px 20px #73a77e";
    }else if(imc < 29.9 && imc > 24.9){
        // console.log("Excesso de peso");
        sectionResult.style.backgroundColor = "#e3c651";
        sectionResult.style.color = "#fff";
        sectionResult.style.boxShadow = "0 0 10px 20px #e3c651";
    }else if(imc < 35 && imc > 29.9){
        // console.log("Obesidade");
        sectionResult.style.backgroundColor = "#c2741f";
        sectionResult.style.color = "#000";
        sectionResult.style.boxShadow = "0 0 10px 20px #c2741f";
    }else if(imc > 35){
        // console.log("Obesidade Extrema");
        sectionResult.style.backgroundColor = "#c22339";
        sectionResult.style.color = "#fff";
        sectionResult.style.boxShadow = "0 0 10px 20px #c22339";
    }else{
        window.alert("Algo deu errado!");
    }

    sectionInputs.classList.add("active");
    sectionResult.classList.add("active");

});

buttonCancel = window.document.getElementById("cancel");
buttonCancel.addEventListener("click", ()=>{
    var spanHeight, spanWeight;
    inputHeight.value = "";
    inputWeight.value = "";
    inputHeight.parentNode.className = "box-input";
    inputWeight.parentNode.className = "box-input";
    spanHeight = inputHeight.parentNode.children[4];
    spanWeight = inputWeight.parentNode.children[4];
    spanHeight.innerHTML = "";
    spanWeight.innerHTML = "";
    return
})