pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
	
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    basic.showIcon(IconNames.Yes)
})
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    1,
    1019,
    4,
    0
    ), pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1019,
    0,
    4
    ))
    basic.pause(100)
    basic.clearScreen()
})
