pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
    basic.clearScreen()
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    basic.showIcon(IconNames.Yes)
})
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    5,
    0
    ), pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    5
    ))
    basic.pause(100)
    basic.clearScreen()
})
