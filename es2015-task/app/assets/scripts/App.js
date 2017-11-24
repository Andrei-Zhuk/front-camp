import displaySources from './modules/displaySources';

const API_KEY = "cc9811e8c45e4304bca8110b265a30fb";
const SERVER = "https://newsapi.org/v2/sources?";
let sources = {};

fetch(`${SERVER}apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        data.sources.forEach(source => {
            if (!sources[source.category]) {
                sources[source.category] = {
                    title: source.category,
                    content: []
                }
            };
            sources[source.category].content.push(source)
        })
        console.log(sources);
        displaySources(sources)
    })
