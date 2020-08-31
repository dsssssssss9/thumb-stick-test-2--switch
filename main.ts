input.onPinPressed(TouchPin.P0, function () {
	
})
pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
    basic.showIcon(IconNames.No)
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
pins.setPull(DigitalPin.P8, PinPullMode.PullDown)
basic.forever(function () {
	
})
