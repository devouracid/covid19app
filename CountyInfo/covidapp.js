let countyList = document.getElementById("countyList")
let state = document.getElementById("stateTextBox".value)
let countyName = document.getElementById("countyTextBox")
let enterButton = document.getElementById("enterButton")


enterButton.addEventListener("click", function() {
    let state = stateTextBox.value.toLowerCase()
    let stateURL = `https://postman-data-api-templates.github.io/county-health-departments/api/${state}.json`
    fetch(stateURL)
    .then(response => response.json())
    .then(result => {
        // let county = result
        let countyId = result.find(county => county.name.toLowerCase().includes(countyName.value.toLowerCase()))
        console.log(countyId)
        let countyFacts = `<ul>
                            <p>${countyId.name}
                            <p><a href = "${countyId.website}">Visit County Website</a></p>
                            <p>${countyId.twitter}
                            <p>${countyId.phone}
                            <p>${countyId.undefined}
                            </ul>`

        infoList.innerHTML = countyFacts
        })
})