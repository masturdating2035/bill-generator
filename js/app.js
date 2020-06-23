const foods = [{
    id: 1,
    name: 'قیمه مکزیکی با سس آلفردو',
    fee: 1000,
    number: 0,
    price: 0,
},
{
    id: 2,
    name: 'قیمه با عدسی',
    fee: 1000,
    number: 0,
    price: 0
},
{
    id: 3,
    name: 'قیمه نذری محرم',
    fee: 1000,
    number: 0,
    price: 0
},
{
    id: 4,
    name: 'قیمه ننه بزرگم',
    fee: 1000,
    number: 0,
    price: 0
}
]

const billGenerator = (foods) => {
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
                   <a href="#" class="plus"><i class="fas fa-plus"></i></a>
                   <a href="#" class="minus"><i class="fas fa-minus"></i></a>
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
}

billGenerator(foods)