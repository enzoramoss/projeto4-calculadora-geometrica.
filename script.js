function triangleArea(base, height) {
    return (base * height) / 2
}

function rectangleArea(base, height) {
    return base * height
}

function squareArea(side) {
    return side * side
}

function trapezoidArea(base1, base2, height) {
    return ((base1 + base2) * height) / 2
}

function circleArea(radius) {
    const pi = 3.14
    return pi * radius * radius
}

function showMenu() {
    return prompt(
        "Escolha uma opção:\n" +
        "\n1. Área do Triângulo\n" +
        "2. Área do Retângulo\n" +
        "3. Área do Quadrado\n" +
        "4. Área do Trapézio\n" +
        "5. Área do Círculo\n" +
        "6. Sair"
    )
}

function isValidNumber(value) {
    return !isNaN(value) && value > 0
}

let toContinue = true
do {
    const option = showMenu()

    switch (option) {
        case '1': {
            const base = parseFloat(prompt("Digite a base do triângulo:"))
            const height = parseFloat(prompt("Digite a altura do triângulo:"))
            if (isValidNumber(base) && isValidNumber(height)) {
                alert("A área do triângulo é: " + triangleArea(base, height).toFixed(2))
            } else {
                alert("Valores inválidos.")
            }
            break
        }
        case '2': {
            const base = parseFloat(prompt("Digite a base do retângulo:"))
            const height = parseFloat(prompt("Digite a altura do retângulo:"))
            if (isValidNumber(base) && isValidNumber(height)) {
                alert("A área do retângulo é: " + rectangleArea(base, height).toFixed(2))
            } else {
                alert("Valores inválidos.")
            }
            break
        }
        case '3': {
            const side = parseFloat(prompt("Digite o lado do quadrado:"))
            if (isValidNumber(side)) {
                alert("A área do quadrado é: " + squareArea(side).toFixed(2))
            } else {
                alert("Valor inválido.")
            }
            break
        }
        case '4': {
            const base1 = parseFloat(prompt("Digite a base maior do trapézio:"))
            const base2 = parseFloat(prompt("Digite a base menor do trapézio:"))
            const height = parseFloat(prompt("Digite a altura do trapézio:"))
            if (isValidNumber(base1) && isValidNumber(base2) && isValidNumber(height)) {
                alert("A área do trapézio é: " + trapezoidArea(base1, base2, height).toFixed(2))
            } else {
                alert("Valores inválidos.")
            }
            break
        }
        case '5': {
            const radius = parseFloat(prompt("Digite o raio do círculo:"))
            if (isValidNumber(radius)) {
                alert("A área do círculo é: " + circleArea(radius).toFixed(2))
            } else {
                alert("Valor inválido.")
            }
            break
        }
        case '6':
            toContinue = false
            alert("Encerrando programa.")
            break
        default:
            alert("Opção inválida. Tente novamente.")
    }
} while (toContinue)