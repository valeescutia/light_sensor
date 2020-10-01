let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    if (light2 >= 0 && light2 <= 85) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (light2 >= 86 && light2 <= 170) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (light2 >= 171 && light2 <= 255) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
