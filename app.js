

var btnTranslate=document.querySelector("#btn-translate")
var textInput=document.querySelector("#text-input")
var outputDiv=document.querySelector("#output")
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/doge.json"



function getTranslationURL(text){
    return serverURL + "?"+"text="+ text

}

function errorHandler(error){
    console.log("error occured",error)
    alert("something went wrong")
}

function clickEventHandler(){

    var inputText=textInput.value
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=> {
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText
    })
       
    .catch(errorHandler)
}
    // outputDiv.innerText="translated " + textInput.value;

btnTranslate.addEventListener("click", clickEventHandler)
