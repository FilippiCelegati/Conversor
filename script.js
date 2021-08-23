
let botao = document.getElementsById("button")
let select  = document.getElementById("select_moedas")



async function converterMoedas(){

    let moedasAtual = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,PYG-BRL,ARS-BRL,CNY-BRL").then( function(resposta){
       return resposta.json()
    })

    let dolar = moedasAtual.USDBRL.high
    let euro = moedasAtual.EURBRL.high
    let peso = moedasAtual.ARSBRL.high
    let gua = moedasAtual.PYGBRL.high
    let ren = moedasAtual.CNYBRL.high

    

    let inputReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("moedas")
    let inputMoedaReal = document.getElementById("real")

    if (select.value === "US$ Dólar"){
    let valorDolares = inputReais / dolar
    inputMoedas.innerHTML = valorDolares.toLocaleString('en-US',{style: 'currency', currency: 'USD'})

    }

    else if(select.value === "€ Euro"){
        let valorEuros = inputReais / euro
        inputMoedas.innerHTML = valorEuros.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
    }

    else if(select.value === "$ Peso"){
        let valorPesos = inputReais / peso
        inputMoedas.innerHTML = valorPesos.toLocaleString('nl-NL', {style: 'currency', currency: 'ARS'})
    }

    else if(select.value === "₲ Guarani"){
        let valorPesos = inputReais / gua
        inputMoedas.innerHTML = valorPesos.toLocaleString('es-PY', {style: 'currency', currency: 'PYG'})
    }

    else if(select.value === "元/¥ Renminbi"){
        let valorPesos = inputReais / ren 
        inputMoedas.innerHTML = valorPesos.toLocaleString('zh-Hans', {style: 'currency', currency: 'CNY'})
    }


    
    inputMoedaReal.innerHTML = inputReais.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
}

//Essa função é responsavel por trocar as bandeiras e os nome das moedas.
function trocaMoeda(){

    let txtMoedas = document.getElementById("txt_moedas")
    let bandMoedas= document.getElementById("band_eua")
    
    if(select.value === "US$ Dólar"){
        txtMoedas.innerHTML = "US$ Dólar"
        bandMoedas.src = "./img/estados-unidos.png"
    }

    else if(select.value === "€ Euro"){
        txtMoedas.innerHTML = "€ Euro"
        bandMoedas.src = "./img/euro.png"

        
    }

    else if(select.value === "$ Peso"){
        txtMoedas.innerHTML = "$ Peso"
        bandMoedas.src = "./img/arg.png"

        
    }

    else if(select.value === "₲ Guarani"){
        txtMoedas.innerHTML = "₲ Guarani"
        bandMoedas.src = "./img/paraguai.png"

        
    }

    else if(select.value === "元/¥ Renminbi"){
        txtMoedas.innerHTML = "元/¥ Renminbi"
        bandMoedas.src = "./img/band_china.png"

        
    }

    converterMoedas()
}


botao.addEventListener("click", converterMoedas )
select.addEventListener("change", trocaMoeda)
