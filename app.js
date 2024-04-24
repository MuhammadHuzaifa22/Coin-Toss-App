const h2 = document.querySelector('h2')
const image = document.querySelector('img');
function toss(Btn){
    console.log(Btn)
    const randomNumber = Math.ceil(Math.random()*2);
    console.log(randomNumber);
if(Btn === 'Masjid' && randomNumber === 1 || Btn === 'Chand' && randomNumber === 2){
    console.log("Toss Jeet Gaye Ho");
    h2.innerHTML = "You Won The Toss";
}
else{
    console.log("Toss Har Gaye Ho");
    h2.innerHTML = "You Lose The Toss"
}
if(randomNumber === 1){
            image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
        }else{
            image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
        }
}