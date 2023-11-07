function solve(json){

    let arr = JSON.parse(json)
    let keys = Object.keys(arr[0])
     
    let result ="";

    let special_symbols = /[&<>"–—©®™≈≠£€°]| {2,}/mg;

    let xxx = (x) => {
        switch (x) {
            case "&": return "&amp;"
            case "<": return "&lt;"
            case ">": return "&gt;"
            case "\"": return "&quot;"
            case "–": return "&apos;"
            case "—": return "&mdash;"
            case "©": return "&copy;"
            case "®": return "&reg;"
            case "™": return "&trade;"
            case "≈": return "&asymp;"
            case "≠": return "&ne;"
            case "£": return "&pound;"
            case "€": return "&euro;"
            case "°": return "&deg;"
            default: return "&nbsp;"
        }
    }
    result += "<table>\n\t<tr>"
    for (let key of keys) {
        result += "<th>" + key.replace(special_symbols, xxx) + "</th>";
    }
    result += "</tr>\n"
    arr.forEach(element => {
        result += "\t<tr>"
        for (keys in element) {
            let word = element[keys].toString();
            word = word.replace(special_symbols, xxx)
            result += `<td>${word}</td>`;
        }
        result += "</tr>\n"
    });
 
    return result += "</table>\n"
    
}
console.log(solve(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`))