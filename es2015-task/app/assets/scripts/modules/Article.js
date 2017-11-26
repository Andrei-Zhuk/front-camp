export default class Article {
    constructor(data) {
        this.data = data
    }

    makeImage() {
        let articleImageLink = document.createElement('a');
        articleImageLink.href = this.data.url;
        articleImageLink.classList.add("articleImageLink")
        let articleImage = document.createElement('img');
        articleImage.src = this.data.urlToImage;
        articleImage.classList.add("articleImage")
        articleImageLink.appendChild(articleImage);
        return articleImageLink
    }

    makeTitle() {
        let articleTitle = document.createElement('a');
        articleTitle.href = this.data.url;
        articleTitle.textContent = this.data.title;
        articleTitle.classList.add("articleTitle");
        return articleTitle
    }

    makeAuthor() {
        let articleAuthor = document.createElement('span');
        articleAuthor.innerText = this.data.author ? `Author: ${this.data.author}` : '';
        articleAuthor.classList.add("articleAuthor");
        return articleAuthor;
    }

    makePublishedTime() {
        let articleTime = document.createElement('span');
        let time = new Date(this.data.publishedAt);
        articleTime.innerText = `Published at ${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()} ${time.getDate() < 10 ? '0' + time.getDate() : time.getDate()}.${time.getMonth() + 1 < 10 ? '0' + time.getMonth() + 1 : time.getMonth() + 1}.${time.getFullYear()}`;
        articleTime.classList.add("articleTime");
        return articleTime
    }

    makeDescription() {
        let articleDescription = document.createElement('p');
        articleDescription.innerText = this.data.description;
        articleDescription.classList.add("articleDescription");
        return articleDescription;
    }

    makeContentContainer() {
        let articleContent = document.createElement('div');
        articleContent.classList.add("articleContent");

        articleContent.appendChild(this.makeTitle())
        articleContent.appendChild(this.makeAuthor())
        articleContent.appendChild(this.makePublishedTime())
        articleContent.appendChild(this.makeDescription())

        return articleContent;
    }

    makeArticle() {
        let article = document.createElement('li');
        article.classList.add("article");

        article.appendChild(this.makeImage());
        article.appendChild(this.makeContentContainer());

        return article;
    }
}
