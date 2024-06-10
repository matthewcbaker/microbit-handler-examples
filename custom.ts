
/**
 * Callback examples
 */
//% weight=40 color=#0fbc11 icon=""
namespace examples {

    /**
     * A simple event taking a function handler
     */
    //% block="on event"
    export function onEvent(handler: () => void) {
        basic.forever(function() {
            if (input.buttonIsPressed(Button.B) && !input.buttonIsPressed(Button.A))
                handler();
            basic.pause(100)
        })
    }

}

class A {
    //% block="create A"
    //% blockSetVariable=a
    static createA() {
        return new A()
    }

    /**
     * An event within a class
     */
    //% block="on class event"
    static onClassEvent(handler: () => void) {
        basic.forever(function () {
            if (input.buttonIsPressed(Button.AB))
                handler();
            basic.pause(100)
        })
    }

    /**
     * An event within a class
     */
    //% block="on $this instance event"
    public onInstanceEvent(handler: () => void) {
        basic.forever(function () {
            if (input.logoIsPressed())
                handler();
            basic.pause(100)
        })
    }
    
    /**
     * An event within a class
     */
    //% block="on $a class instance event"
    static onClassInstanceEvent(a: A, handler: () => void) {
        basic.forever(function () {
            if (input.buttonIsPressed(Button.AB))
                handler();
            basic.pause(100)
        })
    }
}