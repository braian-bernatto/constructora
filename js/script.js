const calculatorInput = document.querySelector('.calculator-input')
const amount = document.querySelector('.amount')
const house = document.querySelector('.house')

calculatorInput.addEventListener('keyup', e => {
  if (e.target.value > 99) {
    house.classList.add('house-m')
    house.classList.add('house-b')
  } else if (e.target.value > 69) {
    house.classList.add('house-m')
  } else {
    house.classList.remove('house-m')
    house.classList.remove('house-b')
  }
})

amount.addEventListener('click', () => {
  console.log('dio click')
})
