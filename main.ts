input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
examples.onEvent(function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    basic.pause(100)
})
