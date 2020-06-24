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
    bronze: 20000,
    silver: 40000,
    gold: 50000
}

function discountPrice(discount) {

    for (const dis in discount) {
        if (dis !== $('#discountBtn').siblings().val()) {
            $('#discount').html(discount[dis])

        } else {
            $('#discount').html(0)
            $('#discountBtn').siblings().css({"background": "rgba(231, 76, 60, 0.18)", "border": "1px solid #e74c3c"})
            $('#discountBtn').siblings().val("Wrong Code")
            $('#discountBtn').siblings().prop("disabled", true);

            setTimeout(function () {
                $('#discountBtn').siblings().css({"background": "white", "border": ".12rem solid #e67e22;"})
                $('#discountBtn').siblings().prop("disabled", false);
                $('#discountBtn').siblings().val("")
            }, 2000);

        }
    }

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
        <span>جمع کل سفارشات</span><span>${sumOrder(foods)}<span> تومان</span></span>
    </div>

    <div class="d-flex justify-content-between">
        <span>حق سرویس و کارمزد</span><span>${(sumOrder(foods) * 2.5) / 100}<span> تومان</span></span>
    </div>

    <div class="d-flex justify-content-between">
        <span>تخفیف</span><span id="discount">0<span> تومان</span></span>
    </div>

    <div class="d-flex justify-content-center">
        <span>۸۹۴/۴۵۰<span> تومان</span></span>
    </div>
    </div>

    <div class="order-left">
    <div class="order-left-discount">
        <input type="text" placeholder="کد تخفیف">
        <i class="fas fa-plus" id="discountBtn" onclick="discountPrice(discount)"></i>
    </div>

    <button class="order-left-reg">ثبت سفارش</button>
    </div>
    `)
}

billGenerator(foodStorage)



