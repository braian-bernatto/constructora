window.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.year')
  const house = document.querySelector('.house')
  const calculatorInput = document.querySelector('.calculator-input')
  const amount = document.querySelector('.amount')
  const houseTypeButtons = document.querySelectorAll('input[name="house-type"]')
  let houseType = 'basic'
  const basicAmountPrice = 2500000
  const premiumAmountPrice = 5000000

  year.innerHTML = new Date().getFullYear()

  calculatorInput.addEventListener('click', e => e.currentTarget.select())

  calculatorInput.addEventListener('keyup', e => {
    calculatorInput.value = e.target.value.replace(/[^0-9]/g, '')
    if (e.target.value > 99) {
      house.classList.add('house-m')
      house.classList.add('house-b')
    } else if (e.target.value > 69) {
      house.classList.add('house-m')
      house.classList.remove('house-b')
    } else {
      house.classList.remove('house-m')
      house.classList.remove('house-b')
    }
    getTotalPrice(e.target.value)
  })

  const setHouseType = e => {
    houseType = e.target.id
  }

  houseTypeButtons.forEach(input =>
    input.addEventListener('change', e => {
      setHouseType(e)
      getTotalPrice(calculatorInput.value)
    })
  )

  const getTotalPrice = m2 => {
    let total = 0

    houseType == 'basic'
      ? (total = parseInt(m2 * basicAmountPrice))
      : (total = parseInt(m2 * premiumAmountPrice))

    if (total === 0) {
      amount.innerHTML = 'Ingrese los m2 &uarr;'
      return
    }

    amount.innerHTML = isNaN(total)
      ? ''
      : Number(total).toLocaleString('de-DE', {
          minimumFractionDigits: 0
        })
  }
})
