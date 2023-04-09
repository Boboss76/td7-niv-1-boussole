basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() <= 90 || input.compassHeading() >= 270) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . .
            . # # . .
            . . . # .
            # # # . .
            `)
    }
})
