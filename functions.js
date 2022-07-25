window.addEventListener('message', evalMessage);
window.addEventListener("keydown", evalKeyDown, false); //capture keypress on bubbling (false) phase

function evalMessage (evnt) {
    // Get the sent data
    var data = evnt.data;
    //console.log ("message received");

    switch (data) {
      case "FocusSeq" : document.getElementById('seqSelect').focus(); break;
      case "FocusTool" : document.getElementById('toolSelect').focus(); break;
      default : return;
    } //switch (data)

} //function evalMessage(event)

function evalKeyDown(evnt) {
    let keyPressed = evnt.keyCode;
    //console.log ("keyUp: ",keyPressed);
    switch (keyPressed) {
       case 87  : focusIframe(); break; //key: w
        default : return;
    } //switch (keyPressed)
} //evalKey(event)


function focusIframe() {
    var childWindow = document.getElementById("myIframe");

    childWindow.contentWindow.postMessage("FocusIframe","*"); 
} //function focusIframe()
