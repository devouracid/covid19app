let countyList = document.getElementById("countyList")
let errorList = document.getElementById("errorList")
let state = document.getElementById("stateTextBox".value)
let countyName = document.getElementById("countyTextBox")
let enterButton = document.getElementById("enterButton")

enterButton.addEventListener("click", function() {
    let state = stateTextBox.value.toLowerCase()
    let stateURL = `https://postman-data-api-templates.github.io/county-health-departments/api/${state}.json`
    fetch(stateURL)
    .then(response => response.json())
    .then(result => {
        let countyId = result.find(county => county.name.toLowerCase().includes(countyName.value.toLowerCase()))
        let countyFacts =  `<ul>
                                <p><a href = "${countyId.website}">${countyId.name}</a>
                                <p>${countyId.phone}</p>
                                <p>Address: ${countyId.undefined ? countyId.undefined: countyId.address}</p>
                                <a class="btn btn-block btn-social btn-twitter">
                                <a href ="${countyId.twitter}" span class="fa fa-twitter"></span> Latest Tweets</a>
                                <a class="btn btn-block btn-social btn-facebook">
                                <a href ="${countyId.facebook}" span class="fa fa-facebook"></span> Updates</a>
                            </ul>`
            errorList.innerHTML = ""
            infoList.innerHTML = countyFacts
        }).catch(function() {
            infoList.innerHTML = ""
            errorList.innerHTML = "Error. Please enter a valid state and/or county."
        })
    })