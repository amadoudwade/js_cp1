let baskets = document.querySelector("#baskets")
let socks = document.querySelector("#socks")
let bag = document.querySelector("#bag")
let total = document.querySelector("#total")
let bprice = document.querySelector("#bprice")
let sprice = document.querySelector("#sprice")
let bagprice = document.querySelector("#bagprice")
let heart1 = document.querySelector("#heart1")
let heart2 = document.querySelector("#heart2")
let heart3 = document.querySelector("#heart3")


let i = 0
let j = 0
let k = 0
var totalbaskets = 0
var totalsocks = 0
var totalbag = 0
var totalprice = 0

baskets.addEventListener("click", function(event){

    let bquantity = document.querySelector("#bquantity")


    if(event.target.className == "fas fa-plus-circle" && i < 5){
        i++
        bquantity.innerText = i
        bprice.innerText = `${i*100} $`
    }
    else if(event.target.className == "fas fa-minus-circle" && i > 1){
        i--
        bquantity.innerText = i
        bprice.innerText = `${i*100} $`
    }
    totalbaskets = i * 100

    // tabbaskets.push(totalbaskets)
    // const z = tabbaskets.findLast(element => element)
    // tabprice1.push(z)
}) 

socks.addEventListener("click", function(event){

    let squantity = document.querySelector("#squantity")

    if(event.target.className == "fas fa-plus-circle" && j < 5){
        j++
        squantity.innerText = j
        sprice.innerText = `${j*20} $`
    }
    else if(event.target.className == "fas fa-minus-circle" && j > 1){
        j--
        squantity.innerText = j
        sprice.innerText = `${j*20} $`
    }
    totalsocks = j * 20
    // tabsocks.push(totalsocks)
    // const z = tabsocks.findLast(element => element)
    // tabprice2.push(z)
})

bag.addEventListener("click", function(event){

    let bagquantity = document.querySelector("#bagquantity")

    if(event.target.className == "fas fa-plus-circle" && k < 5){
        k++
        bagquantity.innerText = k
        bagprice.innerText = `${k*50} $`
    }
    else if(event.target.className == "fas fa-minus-circle" && k > 1){
        k--
        bagquantity.innerText = k
        bagprice.innerText = `${k*50} $`
    }
    
    totalbag = k * 50
    // tabbag.push(totalbag)
    // const z = tabbag.findLast(element => element)
    //  tabprice3.push(z)
})

totalprice = totalbaskets + totalsocks + totalbag

total.innerText = `${totalprice} $`


baskets.addEventListener("click", function(event){

    if(event.target.className == "fas fa-heart"){
        heart1.style.color = "red"
    }

})

baskets.addEventListener("click", function(event){

    if(event.target.className == "fas fa-trash-alt"){
        baskets.remove()
    }

})

socks.addEventListener("click", function(event){

    if(event.target.className == "fas fa-heart"){
        heart2.style.color = "red"
    }

})

socks.addEventListener("click", function(event){

    if(event.target.className == "fas fa-trash-alt"){
        socks.remove()
    }
    
})

bag.addEventListener("click", function(event){

    if(event.target.className == "fas fa-heart"){
        heart3.style.color = "red"
    }

})

bag.addEventListener("click", function(event){

    if(event.target.className == "fas fa-trash-alt"){
        bag.remove()
    }
    
})