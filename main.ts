input.onButtonPressed(Button.A, function () {
    if (Start == 1) {
        Own.move(-1)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(game.score())
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    if (Start == 0) {
        game.setScore(0)
        index = 0
        for (let index2 = 0; index2 < 3; index2++) {
            basic.showNumber(Count[index])
            basic.pause(1000)
            index += 1
        }
        Own = game.createSprite(2, 4)
        Start = 1
        Appear = [0, 1, 2, 3, 4]
        for (let index2 = 0; index2 < 10; index2++) {
            Enemy = game.createSprite(Appear[randint(1, 5)], 0)
            basic.pause(1000)
            Enemy.delete()
            basic.pause(100)
        }
        Own.delete()
        Start = 0
        basic.showString("Finish")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Start == 1) {
        if (Enemy.get(LedSpriteProperty.X) == Own.get(LedSpriteProperty.X)) {
            game.addScore(1)
        }
        if (Enemy.get(LedSpriteProperty.X) != Own.get(LedSpriteProperty.X)) {
            game.addScore(-1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == 1) {
        Own.move(1)
    }
})
let Enemy: game.LedSprite = null
let Appear: number[] = []
let index = 0
let Own: game.LedSprite = null
let Start = 0
let Count: number[] = []
Count = [3, 2, 1]
Start = 0
