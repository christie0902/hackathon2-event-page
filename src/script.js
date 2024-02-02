import { Event } from './component/event.js'
//get data from api
//loop throgh the items
//create elements 
//atach to the contsainer

// should return the array of events

async function loadAndRenderEvents() {
    const container = document.querySelector('.container')
    const events = await fetchData()
    for(const event of events) {
    const newEvent = new Event(event)
    container.appendChild(newEvent.element)

    }
}

loadAndRenderEvents()
async function fetchData () {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/2a8117b3/events')
    const dataArr = await response.json()
    return dataArr;
}