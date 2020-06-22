const foodFee = document.getElementById('foodFee')
const foodCount = document.getElementById('foodCount')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let foodPrice = document.getElementById('foodPrice')

foodCount.textContent = "0"
foodPrice.textContent = "0";

plus.addEventListener('click', e => {
    if (foodCount.textContent == 9) {
        return
    } else {
        foodCount.textContent++
    }

    let multipleFood = parseInt(foodCount.textContent) * parseInt(foodFee.textContent)

    foodPrice.textContent = multipleFood

})

minus.addEventListener('click', e => {
    if (foodCount.textContent == 0) {
        return
    } else {
        foodCount.textContent--
    }

    let multipleFood = parseInt(foodCount.textContent) * parseInt(foodFee.textContent)

    foodPrice.textContent = multipleFood
})