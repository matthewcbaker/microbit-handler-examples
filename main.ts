examples.onEventPause(function () {
    basic.showIcon(IconNames.Heart)
})
examples.onEventLoops(function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
basic.forever(function () {
    basic.pause(100)
})
