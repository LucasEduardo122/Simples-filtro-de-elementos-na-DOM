const inputElement = document.querySelector('input#filter')
const emptyElement = document.querySelector('div.empty')

const cards = document.querySelectorAll('ul.cards li')

addEventListener('input', filterInput)

let count = 0;

function filterInput() {
  if (inputElement.value.length >= 3) {
    for (let card of cards) {
      let title = card.querySelector('h2');
      title = title.textContent.toLocaleLowerCase();

      if (title.includes(inputElement.value)) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block"
    }
  }
}
