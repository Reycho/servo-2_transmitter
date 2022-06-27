radio.setGroup(1)
basic.showLeds(`
    # # # . .
    . # . . .
    . # . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
    radio.sendValue("compass", input.compassHeading())
    led.toggle(1, 1)
    basic.pause(50)
})
