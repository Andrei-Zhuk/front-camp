import {articles} from "./../base/variables";
import Article from "./Article";

export default function displayArticles(articles) {
    let container = document.getElementById('articles-container');

    if (container.children.length !== 0) {
        container.removeChild(container.children[0])
    }

    let articleList = document.createElement('ul');

    for (let i = 0; i < articles.content.length; i++) {
        let article = new Article(articles.content[i]);
        articleList.appendChild(article.makeArticle())
    }

    container.appendChild(articleList);
}
