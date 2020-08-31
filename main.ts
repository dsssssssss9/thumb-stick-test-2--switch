input.onPinPressed(TouchPin.P0, function () {
	
})
pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
    basic.clearScreen()
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    basic.showIcon(IconNames.Yes)
})
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
	
})
