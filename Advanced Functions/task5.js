function solve(input){

    let stringElement = '';

    return{
        append: (s) => stringElement += s,
        removeStart : (n) => stringElement = stringElement.substring(n),
        removeEnd : (n) => stringElement = stringElement.substring(0,stringElement.length - n),
        print: () => console.log(stringElement)
    }

}
solve()

// let secondZeroTest = solution();

// secondZeroTest.append('123');

// secondZeroTest.append('45');

// secondZeroTest.removeStart(2);

// secondZeroTest.removeEnd(1);

// secondZeroTest.print();