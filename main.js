const phoneNum = document.querySelector('.phoneNum');
const phoneName = document.querySelector('.phoneName');
const NameDate = document.querySelector('.NameDate');
const phoneSubmit = document.querySelector('.phoneSubmit');
const span = document.querySelector('#result');

let regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
let data = /^\d{2}-\d{2}-\d{4}$/
let regexp = /\w/gi


phoneSubmit.addEventListener('click', () => {
  if(regExp.test(phoneNum.value)){
    result.innerText = 'вы успешно прошли Redister'
    result.style.color = 'yellow'
}else{
    result.innerText = 'вы не-успешно прошли Redister'
    result.style.color = 'red'
}
});


phoneSubmit.addEventListener('click', () => {
  if(data.test(NameDate.value)){
    result.innerText = 'вы успешно прошли Redister'
    result.style.color = 'yellow'
}else{
    result.innerText = 'вы не-успешно прошли Redister'
    result.style.color = 'red'
}
});


 phoneSubmit.addEventListener('click', () => {
    if(regexp.test(phoneName.value)){
    result.innerText = 'вы успешно прошли Redister'
    result.style.color = 'yellow'
    }else{
    result.innerText = 'вы не-успешно прошли Redister'
    result.style.color = 'red'  
    }
 });