function testVictory () {
    if (index == blueLEDIndex) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
}
function pickNewBlueLED () {
    blueLEDIndex = randint(0, 9)
    strip.clear()
    range = strip.range(blueLEDIndex, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
}
let range: neopixel.Strip = null
let blueLEDIndex = 0
let index = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
let direction = 1
index = 0
pickNewBlueLED()
basic.forever(function () {
    strip.clear()
    range = strip.range(index, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
    if (input.buttonIsPressed(Button.A)) {
        testVictory()
        basic.pause(1000)
        pickNewBlueLED()
    }
    index += direction
    if ((index == 0 || index) == 9) {
        direction = direction * -1
    }
})
