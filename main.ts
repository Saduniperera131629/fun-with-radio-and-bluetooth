radio.onReceivedNumber(function (receivedNumber) {
    turtle.setSpeed(1e+50)
})
envirobit.onClap(function () {
    envirobit.setColourIntegrationTime(envirobit.getTemperature())
    envirobit.setLEDs(envirobit.OnOff.On)
})
radio.onReceivedString(function (receivedString) {
    turtle.forward(envirobit.getTemperature())
    turtle.forward(envirobit.getPressure())
    turtle.forward(envirobit.getHumidity())
})
radio.onReceivedValue(function (name, value) {
    turtle.home()
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    touchbit.setLight(touchbit.TouchPad.left, 1)
})
turtle.forward(100)
turtle.back(1000)
turtle.turnLeft()
turtle.turnRight()
turtle.setPosition(2, 2)
turtle.pen(TurtlePenMode.Down)
turtle.setBrightness(128)
turtle.home()
envirobit.setClapSensitivity(80)
envirobit.setColourIntegrationTime(0)
envirobit.setLEDs(envirobit.OnOff.On)
turtle.setSpeed(25)
Kitronik_Game_Controller.runMotor(100)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.connectToWiFiNetwork("SSID", "key")
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.connectToWiFiBit()
WiFiBit.executeAtCommand("AT", 1000)
WiFiBit.writeBlynkPinValue("510", "A0", "14dabda3551b4dd5ab46464af582f7d2")
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"google.com",
80,
"/search?q=something"
)
WiFiBit.writeBlynkPinValue("510", "A0", WiFiBit.readBlynkPinValue("A0", "14dabda3551b4dd5ab46464af582f7d2"))
WiFiBit.writeBlynkIoTPinValue("1", "V1", "BzMEzpZ9Bud9ZUXZoJVEkbfneCavDVDx")
Kitronik_Game_Controller.runMotor(100)
Kitronik_Game_Controller.setBuzzerPin()
OLED.drawFilledCircle(64, 32, 10)
basic.forever(function () {
	JoyBit.rockerX()
})
Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)
radio.setGroup(1)
JoyBit.rockerY()
JoyBit.myPlayTone(ToneHzTable.do, BeatList.whole_beat)
JoyBit.btnPressed(btnList.cleft, eventList.pressed)

gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function() {
    
})
























