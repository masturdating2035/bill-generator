const foodStorage = [{
    id: 1,
    name: 'قیمه مکزیکی',
    fee: 10000,
    number: 0,
    price: 0,
},
    {
        id: 2,
        name: 'قیمه با عدسی',
        fee: 20000,
        number: 0,
        price: 0
    },
    {
        id: 3,
        name: 'قیمه نذری محرم',
        fee: 30000,
        number: 0,
        price: 0
    },
    {
        id: 4,
        name: 'قیمه ننه بزرگم',
        fee: 40000,
        number: 0,
        price: 0
    }
]

const discount = {
    bronze: (2 / 100),
    silver: (4 / 100),
    gold: (5 / 100)
}

function discountPrice(dis) {
    for (let i in Object.keys(dis)) {
        if (Object.keys(dis)[i] == $('#discountBtn').siblings().val()) {
            $('#discountBtn').siblings().css({
                "background": "rgba(46, 204, 113, 0.18)",
                "border": ".12rem solid #e67e22;"
            })
            $('#discount').html(Object.values(dis)[i] + " درصد")
            setTimeout(function () {
                $('#discountBtn').siblings().val("")
            }, 2000);
            break;
        } else {
            $('#discount').html(0 + " درصد")
            $('#discountBtn').siblings().css({"background": "rgba(231, 76, 60, 0.18)", "border": "1px solid #e74c3c"})

            $('#discountBtn').siblings().prop("disabled", true);

            setTimeout(function () {
                $('#discountBtn').siblings().css({"background": "white", "border": ".12rem solid #e67e22;"})
                $('#discountBtn').siblings().prop("disabled", false);
                $('#discountBtn').siblings().val("")
            }, 2000);

        }
    }

}

function submitOrder() {
    let sum;
    sum = (parseInt($('#sumOrder').text()) + parseInt($('#wageOrder').text())) * parseFloat($('#discount').text())
    sum = (parseInt($('#sumOrder').text()) + parseInt($('#wageOrder').text())) - sum
    $('#finalPrice').text(sum + " تومان")
}


const increase = (id) => {
    const add = foodStorage.find(food => food.id === id)
    if (add.number < 9) {
        add.number += 1
    }
    add.price = add.number * add.fee
    billGenerator(foodStorage)
}

const decrease = (id) => {
    const remove = foodStorage.find(food => food.id === id)

    if (remove.number > 0) {
        remove.number -= 1
    }
    remove.price = remove.number * remove.fee
    billGenerator(foodStorage)
}

const sumOrder = (foodStorage) => {
    let sum = 0;
    foodStorage.forEach(food => sum += food.price)
    return sum
}


const billGenerator = (foods) => {
    $('#items, #order').html('')
    foods.forEach(food => {
        $('#items').append(`
    <div class="foods">
                            
    <div class="foods-info">
       <div class="foods-info-img">
           <img src="./img/dish.jpg">
       </div>

       <div class="foods-info-details">
           <p>${food.name}</p>
           <p><span class="foodFee">${food.fee}</span> تومان</p>
           <div class="foods-info-details-number">
               <span class="foodCount">${food.number}</span>
               <div class="foods-info-details-number-add">
                   <a href="#" class="plus" onclick="increase(${food.id})"><i class="fas fa-plus"></i></a>
                   <a href="#" class="minus" onclick="decrease(${food.id})"><i class="fas fa-minus"></i></a>
               </div>
           </div>
       </div>
   </div> 

   <div class="foods-price">
       <div><span class="foodPrice">${food.price}</span> تومان</div>
   </div>
</div>
<hr>
    `)
    })

    $('#order').append(`
    <div class="order-right">
    <div class="d-flex justify-content-between">
        <span>جمع کل سفارشات</span><span id="sumOrder">${sumOrder(foods)}<span> تومان</span></span>
    </div>

    <div class="d-flex justify-content-between">
        <span>حق سرویس و کارمزد</span><span id="wageOrder">${(sumOrder(foods) * 2.5) / 100}<span> تومان</span></span>
    </div>

    <div class="d-flex justify-content-between">
        <span>تخفیف</span><span id="discount">0<span> درصد</span></span>
    </div>

    <div class="d-flex justify-content-center">
        <span id="finalPrice">0<span> تومان</span></span>
    </div>
    </div>

    <div class="order-left">
    <div class="order-left-discount">
        <input type="text" placeholder="کد تخفیف">
        <i class="fas fa-plus" id="discountBtn" onclick="discountPrice(discount)"></i>
    </div>

    <button class="order-left-reg" id="regOrder" onclick="submitOrder()">ثبت سفارش</button>
    </div>
    `)
}

billGenerator(foodStorage)



