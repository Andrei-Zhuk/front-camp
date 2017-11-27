import {articles} from "./../base/variables";
import Article from "./Article";

export default function displayArticles(articles) {
    let container = document.getElementById('articles-container');
    let articlesTitle = document.createElement('h2');
    articlesTitle.innerText = "Articles:";
    articlesTitle.classList.add("articlesTitle")

    if (container.children.length !== 0) {
        container.removeChild(container.children[0]);
        container.removeChild(container.children[1])
    }

    let articleList = document.createElement('ul');
    articleList.classList.add("articleList")

    for (let i = 0; i < articles.content.length; i++) {
        let article = new Article(articles.content[i]);
        articleList.appendChild(article.makeArticle())
    }

    container.appendChild(articlesTitle);
    container.appendChild(articleList);
}
