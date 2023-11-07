// function solve() {

//   let [genButtonRef, buyButtonRef] = document.querySelectorAll("button");
//   let [inputElementsRef, resultElementsRef] = document.querySelectorAll("textarea")
//   const tableBodyRef = document.querySelector("tbody");

//   genButtonRef.addEventListener("click", genFuncHendler);
//   buyButtonRef.addEventListener("click", buyButtonHendler);

//   function genFuncHendler(event) {

//     if (!inputElementsRef.value) {
//       return
//     }
//     let value = JSON.parse(inputElementsRef.value);

//     for (let el of value) {
//       let domElement = createTableDataWithInnerHTML(el)
//       tableBodyRef.appendChild(domElement)
//     }
//   }

//   function createTableDataWithInnerHTML(data) {
//     let tableRow = document.createElement("tr");
//     tableRow.innerHTML = `
//     <td> 
//     <img
//     src=${data.img}>
//     </td>
//     <td>
//   <p>${data.name}</p>
//    </td>
//     <td>
//     <p>${data.price}</p>
//     </td>
//     <td>
//     <p>${data.decFactor}</p>
//     </td>
//      <td>
//     <input type="checkbox"/>
//     </td>
//     `

//     return tableRow;
//   }

//   function buyButtonHendler(event) {

//     let names = [];
//     let totalPrice = 0;
//     let avgDecorFactor = 0;

//     let selectCheckBox = Array.from(document.querySelectorAll("input[type=checkbox]")).filter(el => el.checked);

//     selectCheckBox.forEach(el => {
//       let [img, name, price, decorFactor, mark] = Array.from(el.parentElement.parentElement.children)
//       names.push(name.children[0].textContent)
//       totalPrice += Number(price.children[0].textContent);
//       avgDecorFactor += Number(decorFactor.children[0].textContent)
//     })

//     let result = `Bought furniture: ${names.join(", ")}.\nTotal price: ${totalPrice}.\nAverage decoration factor: ${avgDecorFactor / names.length}`
//     resultElementsRef.value = result
//   }



// }
function solve() {
  // capture elements
  const table = document.querySelector("table.table tbody");
  const [input, output] = [...document.querySelectorAll("textarea")];
  const [generateBtn, buyBtn] = [...document.querySelectorAll("button")];
 
  // attach events
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);
 
  // helper functions
  function p(...content) {
    return createElement("p", {}, ...content);
  }
 
  function td(...content) {
    return createElement("td", {}, ...content);
  }
 
  function createElement(type, props, ...content) {
    const element = document.createElement(type);
 
    // loop props and fill element
    for (const prop in props) {
      element[prop] = props[prop];
    }
 
    //  loop content and fill element
    for (let entry of content) {
      if (typeof entry === "string" || typeof entry === "number") {
        entry = document.createTextNode(entry);
      }
 
      element.appendChild(entry);
    }
    return element;
  }
 
  const items = [];
 
  function generate(e) {
    const data = JSON.parse(input.value);
    for (const item of data) {
      // create checkbox
      const checkbox = createElement("input", { type: "checkbox" });
 
      // create row
      const { img, name, price, decFactor } = item;
      const row = createElement(
        "tr",
        {},
        td(createElement("img", { src: img })),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkbox)
      );
 
      // push items
      items.push({ element: row, isChecked, item });
 
      function isChecked() {
        return checkbox.checked;
      }
 
      table.appendChild(row);
    }
  }
 
  function buy(e) {
    const furniture = items
      .filter((i) => i.isChecked())
      .reduce(
        (acc, { item: c }, i, a) => {
          acc.names.push(c.name);
          acc.total += Number(c.price);
          acc.decFactor += Number(c.decFactor) / a.length;
          return acc;
        },
        { names: [], total: 0, decFactor: 0 }
      );
    const result =
      `Bought furniture: ${furniture.names.join(", ")}\n` +
      `Total price: ${furniture.total.toFixed(2)}\n` +
      `Average decoration factor: ${furniture.decFactor}`;
    output.value = result;
  }
}
 