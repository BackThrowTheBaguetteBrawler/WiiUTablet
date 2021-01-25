var touch=0;
var tx=0;
var ty=0;
var socket;
var host = "ws://10.42.0.1:8887";
var packets=0;
var aButton=0;

window.onload = function () {
        try{
            	socket = new WebSocket(host);

                socket.onopen = function(){
                }

                socket.onmessage = function(msg){
                }

                socket.onclose = function(){
                }
        } catch(exception){
        }
        setInterval("loop()",1);
}

function loop(){ 
        wiiu.gamepad.update();
        if(wiiu.gamepad.isDataValid==1){
                touch = wiiu.gamepad.tpTouch;
                tx = wiiu.gamepad.tpX;
                ty = wiiu.gamepad.tpY;
        if(wiiu.gamepad.hold==32768 || wiiu.gamepad.hold==2048){
        aButton=1;
        }
        else{
	aButton=0;
        }

        socket.send(touch+ ";" +tx+ ";" +ty+ ";" +aButton);
        packets++;
        updateS();
}

function updateS(){
//      document.body.innerHTML = "Touch? = " +touch+ "</br>X = " +tx+ "</br>Y = " +ty+ "</br>Packets: " +packets+ "  </br>"+wiiu.g>
}
}
