
const key = "3064c31f80a56cdb0ba42a5f54b89b52";

function naTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em "+ dados.name;
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + " °C";
    document.querySelector(".max-temp").innerHTML = "Máxima   " + Math.floor(dados.main.temp_max) + "°C" ;
    document.querySelector(".min-temp").innerHTML = "Minimo   " + Math.floor(dados.main.temp_min) +  "°C";
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade ").innerHTML = "<img width=35px src=imagem/icons8-umidade-100.png style= 'margin-right: 10px;'>" + dados.main.humidity + "%";
    document.querySelector(".vento").innerHTML = "<img src=imagem/transmissao-de-ar.png style= 'margin-right: 10px;'>" + dados.wind.speed + "Km";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    console.log(dados);


}


async function buscarCidade(cidade){
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
   
    naTela(dados); 
}

function cliqueNoBotao(){
    const cidade =document.querySelector(".input-cidade").value;
    
    buscarCidade(cidade);   
}

