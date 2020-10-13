function setcolor () {
    strip.showColor(colors[color])
}
input.onButtonPressed(Button.A, function () {
    isOn = !(isOn)
    if (isOn) {
        setcolor()
    } else {
        strip.clear()
        strip.show()
    }
})
input.onGesture(Gesture.Shake, function () {
    color += 1
    color = color % colors.length
    isOn = true
    setcolor()
})
let isOn = false
let color = 0
let colors: number[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
strip.clear()
strip.show()
colors = [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Orange), neopixel.colors(NeoPixelColors.Yellow), neopixel.colors(NeoPixelColors.Green)]
color = 0
isOn = false
