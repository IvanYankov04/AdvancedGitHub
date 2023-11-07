function create(words) {

   const DomElement = document.getElementById("content")
   
   for(let word of words){
      let divElement = document.createElement("div");

      let pEl = document.createElement("p")

      pEl.style.display = "none"
      pEl.textContent = word

      divElement.addEventListener("click",onClickList)

      divElement.appendChild(pEl);
      DomElement.appendChild(divElement)
   }

   function onClickList(e){

      let difRev = e.target
      let pRev = difRev.children[0];
      pRev.style.display = "block"
   }
}