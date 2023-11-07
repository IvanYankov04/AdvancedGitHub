function getArticleGenerator(articles) {
    let counter = 0;
 
    let articleArr = articles;
    let divBox = document.getElementById('content');
    
 
    return () => {
        if(articleArr[counter]){
            let article = document.createElement('article');
            article.textContent = articleArr[counter];
            divBox.appendChild(article);
        }
        counter++;
    }
}
// function getArticle(articles){
//     let counter = 0;

//     let artArr = articles;
//     let divBox = document.getElementById("content");

//     return() =>{
//         if(artArr[counter]){
//             let article = document.createElement('article');
//             article.textContent = artArr[counter];
//             divBox.appendChild(article);          
//         }

//         counter++
//     }
// }
