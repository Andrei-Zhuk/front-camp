import displaySources from './modules/displaySources';
import {API_KEY, SERVER, TYPE_SOURCES, sources} from './base/variables';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'appStyles';

fetch(`${SERVER}${TYPE_SOURCES}apiKey=${API_KEY}`)
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
        displaySources(sources);
    })
