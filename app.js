const button = document.querySelector('#search-btn')

// create nameless function with axios and the url
const getParkNames = async (input) => {
  try {
    let filterParks = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${input}&api_key=iDGndNNbXpQ40TKBbBOEIetSM80ONg1kacWC9Pvn`)
    const parkData = filterParks.data.data
    showParks(parkData)
  } catch (error) {
    console.error(error)
  }
}
// create a function that creates the park info
function showParks(parkData) {
  parkData.forEach(park => {
    let parkHours = park.operatingHours[0].standardHours
    console.log(parkHours)
    let parkInfo = `
    <div class='all-park-info'>
    <div class='img-and-info'>
    <img class='park-img'src="${park.images[0].url}">
    <div class='park-name-and-park-address'>
    <h2 class="park-name">${park.fullName}</h2>
    <h3 class="park-address-city-state">${park.addresses[0].stateCode}, ${park.addresses[0].city}</h3>
    <h4 class="park-address">${park.addresses[0].line1}</h4>
    </div>
    </div>
    <div class="park-specifics">
    <div class='park-generals'>
    <div class='park-description-div'>
    <p class="park-description">${park.description}</p>
    </div>
    <div class="park-hours-and-directions">
    <ul class="days-of-the-week">
    <li>Monday: ${parkHours.monday}</li>
    <li>Tuesday: ${parkHours.tuesday}</li>
    <li>Wednesday: ${parkHours.wednesday}</li>
    <li>Thursday: ${parkHours.thursday}</li>
    <li>Friday: ${parkHours.friday}</li>
    <li>Saturday: ${parkHours.saturday}</li>
    <li>Sunday: ${parkHours.sunday}</li>
    </ul>
    <div class="park-directions">
    <p class="direction-text">${park.directionsInfo}</p>
    </div>
    </div>
    </div>
    
    `
    document.querySelector('.park-data').insertAdjacentHTML('beforeend', parkInfo)

    return parkInfo
  })
}

// create button event listener that submits the form
button.addEventListener('click', () => {
  const output = document.querySelector('#search-bar').value
  getParkNames(output)
  document.querySelector('.park-data').innerHTML = '<h1 class="about">About the Parks</h1>'
})

// append the info to the DOM^
function appendParkInfo() {
  let displayPark = document.querySelector('section')
  displayPark.append(showParks)
}
// Remove recently searched from the DOM
// define button 