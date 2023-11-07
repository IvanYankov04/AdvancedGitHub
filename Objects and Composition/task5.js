function createAssemblyLine  () {

    function hasClima(obj) {
        const template = {
            temp: 21,
            tempSettings: 21,
            adJustTemp: function adJustTemp() {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--
                }
            }
        }
        return obj
    }
    function hasAudio(obj) {

        const template = {

            currentTrack: { name: null, artist: null },
            nowPlaying: function nowPlaying() {

                if (obj.currentTrack !== null) {

                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`)
                }
            }
        }
        return obj
    }
    function hasParktronic(obj) {
        const template = {
            checkDistance: function checkDistance(distance) {

                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!")
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!")
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!")
                }
            }
        }
        return obj
    }

    return{
        hasClima,
        hasAudio,
        hasParktronic
    }


}

const assemblyLine = createAssemblyLine();

const myCar = {

    make: 'Toyota',

    model: 'Avensis'

};

console.log(myCar);


