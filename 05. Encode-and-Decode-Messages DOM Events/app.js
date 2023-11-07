function encodeAndDecodeMessages() {
    
    let buttonRef = document.querySelectorAll("button");
    let messRef = document.querySelectorAll("textarea");
    debugger

    const encodeButt = buttonRef[0];
    const decodeButt = buttonRef[1];

    const encodeTextArea = messRef[0];
    const decodeButtTextArea = messRef[1];

    encodeButt.addEventListener("click",encdMSGHendler);
    decodeButt.addEventListener("click",decodeMSGHendler)

    function encdMSGHendler(event){

        let currentText = encodeTextArea.value
        let newMessege = "";
        for(let char of currentText){
            let numValue = char.charCodeAt();
            numValue ++
            newMessege += String.fromCharCode(numValue)
        }
        decodeButtTextArea.value = newMessege;
        encodeTextArea.value = ""
    }
    function decodeMSGHendler(event){

        let currentText = decodeButtTextArea.value;
        let decodeMess = "";

        for(let charMinustOne of currentText){

            let numValue = charMinustOne.charCodeAt();
            numValue --
            decodeMess += String.fromCharCode(numValue)
        }
        decodeButtTextArea.value = decodeMess
    }
}