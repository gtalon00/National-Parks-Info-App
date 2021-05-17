const button = document.querySelector('#search-btn')

// create nameless function with axios and the url
const getParkNames = async (input) => {
  try {
    const filterParks = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${input}&api_key=iDGndNNbXpQ40TKBbBOEIetSM80ONg1kacWC9Pvn`)
    const parkData = filterParks.data.data
    console.log(parkData)
  } catch (error) {
    console.error(error)
  }
}
getParkNames('ME')
// create a function that creates the park info
function showParks(parkData) {
  parkData.forEach(park => {
    let parkInfo = `
    <h2>${park.fullName}</h2>
    <img src="${park.images}">
    <p>${park.description}</hp>
    <h3>${park.operatinghours.standardhours}</h3>
    <h3>${park.address}</h3>
    `
    document.querySelector('.park-data').insertAdjacentElement('beforeend', parkInfo)
    return parkInfo
  })
}

// create button event listener that submits the form
button.addEventListener('click', () => {
  const output = document.querySelector('#search-bar').value
  getParkNames(output)
})

// append the info to the DOM^
function appendParkInfo() {
  let displayPark = document.querySelector('.park-data')
  displayPark.append(showParks)
}
// Remove recently searched from the DOM
// define button 
