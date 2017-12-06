import {articles} from "./../base/variables";
import Article from "./Article";

export default function displayArticles(articles) {
    let container = document.getElementById('articles-container');
    let babel_a = 4;

    if (container.children.length !== 0) {
        container.removeChild(container.children[0]);
        container.removeChild(container.children[1])
    }
    let articlesString = "";

    for (let i = 0; i < articles.content.length; i++) {
        let article = new Article(articles.content[i]);
        articlesString += article.makeArticle();
    }
    container.innerHTML = `<h2 class="articlesTitle">Articles:</h2>
                           <ul class="articleList">${articlesString}</ul>`
}
