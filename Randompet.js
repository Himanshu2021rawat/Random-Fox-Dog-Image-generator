const  dog_button = document.getElementById('dog_button');  
const  fox_button = document.getElementById('fox_button');  
const  dog_result = document.getElementById('dog_result');   
const  fox_result = document.getElementById('fox_result');  


fox_button.addEventListener('click',getRandomfox);

dog_button.addEventListener('click',getRandomDog);


function getRandomfox(){
    fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(data =>{
        fox_result.innerHTML = `<img src="${data.image}"/>`
    })
}


function getRandomDog(){
    fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(data =>{
        if(data.url.includes('.mp4')){
            getRandomDog()
        }
        else{
        dog_result.innerHTML = `<img src="${data.url}"/>`
    }
    })
}