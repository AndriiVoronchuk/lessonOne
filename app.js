function fn1(){
    console.log("Hello")
}

fn1()
function fn2(a,b){
    return a+b
}

const c=7
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

const fn7=()=>{
    console.log(7)
}

const fn8=(a,b)=>a*b



fn7()
console.log(fn8(5,7))
