function upperCaseWords(string) {
    let matches = string.match(/(\w+)/g).join(", ").toUpperCase();;
    console.log(matches);
  }