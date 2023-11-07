function lastKNum(n, k) {
    let result = [1];
    while (result.length < n) {
        let nextNum = 0;
        if (result.length < k) {
            nextNum = result.reduce((a, b) => a + b);
        } else {
            nextNum = result.slice(result.length - k).reduce((a, b) => a + b);
        }
        result.push(nextNum);
    }
    return result;
}