const redtext = document.getElementById('red');
const greentext = document.getElementsByClassName('news__slider-text')[0]

console.dir(redtext.textContent);
setTimeout(() => {
 addStyleRed(redtext),
 addStyleGreen(greentext)

}, 3000)

function addStyleRed(node) {
  node.textContent = 'Анонімні Алкоголіки';
  node.style.color = 'red';
  node.style.textAlign = 'center';
  node.style.backgroundColor = 'blue';
}
function addStyleGreen(node) {
  node.style.color = 'green'
}


