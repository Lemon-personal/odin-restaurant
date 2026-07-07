const contentDiv = document.querySelector("#content")
const aboutDiv = document.createElement("div")
let toggled = true
aboutDiv.setAttribute("id", "about")
contentDiv.appendChild(aboutDiv)

const storeHours = [
    {day: "Monday", hours: "8AM - 8PM"},
    {day: "Tuesday", hours: "8AM - 8PM"},
    {day: "Wednesday", hours: "8AM - 8PM"},
    {day: "Thursday", hours: "8AM - 8PM"},
    {day: "Friday", hours: "8AM - 8PM"},
    {day: "Saturday", hours: "8AM - 8PM"},
    {day: "Sunday", hours: "8AM - 8PM"}
]


const initAbout = () => {
    const blurbDiv = document.createElement("div")
    const storeInfoDiv = document.createElement("div")

    const blurbHeader = document.createElement("h1")
    const blurbBlurb = document.createElement("p")

    blurbHeader.textContent = "THE BEST SANDWICHES - TAILS DOWN"
    blurbBlurb.textContent = "Around here no rat does it like we do." + 
                             "We put the art in sandwich artist, " +
                             "packing every deli, club, melt, reuben (and more!) with flavor that'll leave you bruxing." + 
                             "So don't find yourself scavenging and check out the store information below."
    
    const storeHoursDiv = document.createElement("div")
    const hoursHeader = document.createElement("h3")
    hoursHeader.textContent = "Store Hours"
    storeHoursDiv.appendChild(hoursHeader)
    storeHoursDiv.appendChild(initHourTable())
    storeInfoDiv.appendChild(storeHoursDiv)
    

    const locationDiv = document.createElement("div")
    const locationHeader = document.createElement("h3")
    const location = document.createElement("p")
    locationHeader.textContent = "Location"
    location.textContent = "123 Ratward Drive, Boggletown, Florida 12345"
    locationDiv.appendChild(locationHeader)
    locationDiv.appendChild(location)
    storeInfoDiv.appendChild(locationDiv)
    

    blurbDiv.appendChild(blurbHeader)
    blurbDiv.appendChild(blurbBlurb)
    aboutDiv.appendChild(blurbDiv)
    aboutDiv.appendChild(storeInfoDiv)
}

const toggle = () => {
    aboutDiv.classList.toggle("disabled")
    toggled = !toggled
}

const getToggle = () => toggled

const getDiv = () => {
    return aboutDiv
}

const initHourTable = () => {
    const table = document.createElement("table")

    storeHours.forEach(d => {
            let dayRow = document.createElement("tr")
            let dayD = document.createElement("td")
            let hourD = document.createElement("td")

            dayD.textContent = d.day
            hourD.textContent = d.hours

            dayRow.appendChild(dayD)
            dayRow.appendChild(hourD)
            table.appendChild(dayRow)
        }
    )
    
    return table
}



export {initAbout, toggle, getToggle, getDiv}