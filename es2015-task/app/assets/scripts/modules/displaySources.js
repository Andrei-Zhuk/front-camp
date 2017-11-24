import {API_KEY, SERVER, TYPE_EVERYTHING, sources, articles} from "./../base/variables";
import displayArticles from "./displayArticles";

export default function displaySources(sources) {
    let container = document.getElementById('sources-container');

    for (var category in sources) {
        let categoryContainer = document.createElement('div');
        let categoryTitle = document.createElement('a');
        categoryTitle.href = '#';
        categoryTitle.textContent = sources[category].title;
        categoryTitle.id = category;
        categoryTitle.classList.add("category");
        categoryTitle.addEventListener("click", handleCategoryClick)
        let sourceList = document.createElement('ul');
        sourceList.classList.add("sourceList");

        for (var i = 0; i < sources[category].content.length; i++) {
            let source = document.createElement('li');
            let sourceTitle = document.createElement('a');
            sourceTitle.href = '#';
            sourceTitle.textContent = sources[category].content[i].name;
            sourceTitle.id = sources[category].content[i].id
            sourceTitle.addEventListener('click', handleSourceClick)

            source.appendChild(sourceTitle);
            sourceList.appendChild(source);
        }

        sources[category].list = sourceList
        categoryContainer.appendChild(categoryTitle);
        categoryContainer.appendChild(sourceList);
        container.appendChild(categoryContainer);
    }
}

function handleCategoryClick(e) {
    console.log(e);
    sources[e.target.id].list.classList.toggle("sourceListVisible");
}

function handleSourceClick(e) {
    let source = e.target.id;
    fetch(`${SERVER}${TYPE_EVERYTHING}apiKey=${API_KEY}&sources=${source}`)
        .then(response => response.json())
        .then(data => {
            articles.content = data.articles;
            displayArticles(articles);
        })
}