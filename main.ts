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
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P0)
