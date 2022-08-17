const car = {
    model: "VW", maxSpeed: 250, color: "blue",
    passengers: [
        {stage: 5, name: "Vasy", age: 25, driver: true},
        {stage: 5, name: "Pety", age: 27, driver: true},
        {stage: 0, name: "Katy", age: 26, driver: false},
        {stage: 5, name: "Sveta", age: 28, driver: true},
    ]
}
car.passengers.forEach((item, index) => {
    try {
        console.log(index === 85 ? car.passengers.index.index2[2] : car.passengers[index])
    } catch (error) {
        console.log("ERROR: " + error.message)
    } finally {
        console.log('finally')
    }
})