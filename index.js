let var1, var2, operator, num = 0, step1 = false
let display_div = document.querySelector(".display")
let all_buttons = document.querySelectorAll("button")

let add = (a, b) => {
    return a + b
}

let subtract = (a, b) => {
    return a - b
}

let multiply = (a, b) => {
    return a * b
}

let divide = (a, b) => {
    return Math.round((a / b)*100)/100
}

let operate = (op) => {
    switch (op) {
        case "+":
            return add
        case "-":
            return subtract
        case "*":
            return multiply
        case "/":
            return divide
    }
}

let updateDisplay = (value) => {
    if (Number.isInteger(value)) {
        num *= 10
        num += value
        display_div.innerHTML = `<h1>${num}</h1>`
    } else if (value === "=") {
        if (step1) {
            var2 = num
            // num = 0
            step1 = false
            num = operate(operator)(var1, var2)
            display_div.innerHTML = `<h1>${num}</h1>`
        }
    } else if (value === "clear") {
        var1 = 0
        var2 = 0
        num = 0
        operater = ""
        step1 = false
        display_div.innerHTML = `<h1>000</h1>`
    } else {
        if (step1) {
            updateDisplay("=")
        }
        var1 = num
        num = 0
        operator = value
        display_div.innerHTML = `<h1>${operator}</h1>`
        
        step1 = true
    }
}

all_buttons.forEach(btn => {
    let type = btn.id
    btn.addEventListener("click", (e) => {
        if (type in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
            updateDisplay(parseInt(type))
        }
        else if (type === "equals") {
            updateDisplay("=")
        } else if (type === "clear") {
            updateDisplay("clear")
        } else {
            updateDisplay(type)
        }
    })
})