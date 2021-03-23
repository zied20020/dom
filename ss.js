let pl = document.querySelectorAll('.cart-qty-plus');
// let quat= document.getElementsByClassName('cart-qty-plus')
console.log(pl)
// console.log(quat)
for(let i=0;i<pl.length;i++) {
  pl[i].addEventListener('click', function () {
    //   console.log(pl[i].nextElementSibling)
    pl[i].nextElementSibling.value++;
    total();
    totall();
});
}
let mi = document.querySelectorAll('.cart-qty-minus');
for (let i=0;i<mi.length;i++) {
  mi[i].addEventListener('click', function () {
    if (mi[i].previousElementSibling.value > 0) {
      mi[i].previousElementSibling.value--;
    }
    total();
    totall();
  });
}
function total(){
    let pricet=document.getElementsByClassName('price');
    let quan=document.getElementsByClassName('qty');
    let som=document.querySelectorAll('.amount');
    for (let i=0;i<quan.length;i++){
        som[i].innerHTML=Number(pricet[i].value*quan[i].value)
    }
}
function totall(){
    let soom=document.getElementsByClassName('amount');
    let somm=0;
    for (let i=0;i<soom.length;i++){
        console.log(soom[i])
        somm+=Number(soom[i].innerHTML)
    }
    console.log(somm)
    document.getElementById('total').innerText=somm;
}