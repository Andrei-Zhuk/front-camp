export default class Article {
    constructor(data) {
        this.data = data
    }

    makeImage() {
        return `<a href="${this.data.url}" class="articleImageLink">
                    <img src="${this.data.urlToImage}" class="articleImage">
                </a>`
    }

    makeTitle() {
        return `<a href="${this.data.url}" class="articleTitle">${this.data.title}</a>`
    }

    makeAuthor() {
        return `<span class="articleAuthor">${this.data.author ? `Author: ${this.data.author}` : ''}</span>`
    }

    makePublishedTime() {
        let time = new Date(this.data.publishedAt);
        return `<span class="articleTime">
                    Published at ${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()} ${time.getDate() < 10 ? '0' + time.getDate() : time.getDate()}.${time.getMonth() + 1 < 10 ? '0' + time.getMonth() + 1 : time.getMonth() + 1}.${time.getFullYear()}
                </span>`
    }

    makeDescription() {
        return `<p class="articleDescription">${this.data.description}</p>`
    }

    makeContentContainer() {
        return `<div class="articleContent">
                    ${this.makeTitle()} ${this.makeAuthor()} ${this.makePublishedTime()} ${this.makeDescription()}
                </div>`
    }

    makeArticle() {
        return `<li class="article">${this.makeImage()} ${this.makeContentContainer()}</li>`
    }
}
