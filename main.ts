function ConvertCtoF (C: number) {
    return C * 1.8 + 32
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(ConvertCtoF(input.temperature()))
})
