const car = {
    model: "VW", maxSpeed: 250, color:"blue",
    distance: 126353*1.6,
    year:2003,
    age:function (){
        return 2022-this.year
    },
    showPassengersCount: function (){
        const passengersCount=this.passengers.length
        console.log(passengersCount)
    },
    passengers:[
        {name:"Vasy",age:25,driver:true},
        {name:"Pety",age:27,driver:true},
        {name:"Katy",age:26,driver:false},
        {name:"Sveta",age:28,driver:true},
    ]
}
/*console.log(car)
const car1=car
console.log(car1)
car1.maxSpeed=300
console.log(car)
console.log(car1)
const car2=Object.assign({},car)
car2.maxSpeed=500
console.log(car,car1,car2)
car.doors=4
console.log(car,car1,car2)
delete car.model
console.log(car,car1,car2)*/

console.log(car.age())
car.showPassengersCount()