function solve(){

    let store = {
        protein :0,
        carbohydrate :0,
        fat :0,
        flavour : 0
    }
    let receptObj = {
        apple:{
            carbohydrate :1,
            flavour : 2
        },
        lemonade:{
            carbohydrate :10,
            flavour : 20
        },
        burger:{

            carbohydrate :5,
            fat : 7,
            flavour : 3
        },
        eggs:{

            protein :5,
            fat : 1,
            flavour : 1
        },
        turkey:{
            protein : 10,
            carbohydrate :10,
            fat : 10,
            flavour : 10
        }
    }
    return function manager(input){
        let token = input.split(" ")
        let command = token[0];
        
        switch(command){
            case "restock":
                return restock(token[1],token[2]);
                break;
            case "prepare":
                return prepare(token[1],Number(token[2]))
                break;
            case "report":
                return report()
                break;
        }
    }
    function restock(microelement,quantity){
        store[microelement] = quantity
        return "Success" 
    }
    function prepare(recipe,quantity){

        let prepElements ={}

        for(let [el,value] of Object.entries(receptObj[recipe])){
            let needQuantity = value*quantity
            if(store[el] < needQuantity){
                return `Error: not enough ${el} in stock`
            }
            prepElements[el] = needQuantity
        }
      for(let [el,value] of Object.entries(prepElements)){
        store[el] -= value
      }
      return "Success"
    }

    function report(){
        return `protein=${store[protein]} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`
    }

}
