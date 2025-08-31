input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    temperatuur = input.temperature()
    temperatuur += -3
    basic.showString("" + (temperatuur))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    basic.clearScreen()
})
let temperatuur = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P0)
