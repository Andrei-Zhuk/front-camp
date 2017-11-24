export default function displaySources(sources) {
    let container = document.getElementById('sources');

    for (var category in sources) {
        let categoryContainer = document.createElement('div');
        let categoryTitle = document.createElement('a');
        categoryTitle.href = '#';
        categoryTitle.textContent = sources[category].title;
        let sourceList = document.createElement('ul');

        for (var i = 0; i < sources[category].content.length; i++) {
            let source = document.createElement('li');
            let sourceTitle = document.createElement('a');
            sourceTitle.href = '#';
            sourceTitle.textContent = sources[category].content[i].name;
            sourceTitle.id = sources[category].content[i].id
            sourceTitle.addEventListener('click', () => {})
            source.appendChild(sourceTitle);
            sourceList.appendChild(source);
        }

        categoryContainer.appendChild(categoryTitle);
        categoryContainer.appendChild(sourceList);
        container.appendChild(categoryContainer);
    }
}
