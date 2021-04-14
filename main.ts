input.onButtonPressed(Button.A, function () {
    count += 1
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.addScore(-1)
    }
    if (count % 3 == 0) {
        pause2 += -25
    }
})
input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    count += 1
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.addScore(-1)
    }
    if (count % 3 == 0) {
        pause2 += -25
    }
})
let sprite: game.LedSprite = null
let count = 0
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.pause(200)
}
count = 0
let pause2 = 200
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(pause2)
})
