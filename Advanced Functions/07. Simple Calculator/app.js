function calculator() {
    let firstSelector;
    let secondSeletor;
    let result;
    return {

            init: function (selectorA, selectorB, selectorResult) {
                firstSelector = document.querySelector(selectorA);
                secondSeletor = document.querySelector(selectorB);
                result = document.querySelector(selectorResult)
            },
            add: function () {
                let numA = Number(firstSelector.value);
                let numB = Number(secondSeletor.value);
                result.value = numA + numB
            },
            subtract: function () {
                let numA = Number(firstSelector.value);
                let numB = Number(secondSeletor.value);
                result.value = numA - numB
            }
        }
    }





