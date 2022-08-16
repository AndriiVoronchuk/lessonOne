function fn1(){
    console.log("hello")
}
fn1()
function fn2(a,b){
    return a+b
}

console.log(fn2(2,3))
function fn3(a=5,b=5){
    console.log(a*b)
}
fn3(2,3)
fn3()

const fn4=function (a){
    console.log(a)
}
fn4("hello")
const fn5=fn4
fn5(5)

/*const fn6=function (fn){
     fn()
}
fn6(fn4("Hi"))*/