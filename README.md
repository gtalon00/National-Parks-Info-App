# National-Parks-Info-App

# Project Overview

## Project Name

National Parks App

## Project Description

An application that gives the user the chance to look up a multitude of national parks and get information and images on them back in a visually pleasing mannor. I want to give knowledge about the parks to the public that isn't convoluted and hard to get to. Hopefully giving a visually stunning page.

Webpage: file:///Users/anytimeappliance/Desktop/Talon_GA/sei/sparrow/unit_1/P1/National-Parks-Info-App/index.html

## API and Data Sample

https://developer.nps.gov/api/v1/parks?stateCode=ME&api_key=iDGndNNbXpQ40TKBbBOEIetSM80ONg1kacWC9Pvn

```
{
    "total": "6",
    "limit": "50",
    "start": "0",
    "data": [
        {
            "id": "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",
            "url": "https://www.nps.gov/acad/index.htm",
            "fullName": "Acadia National Park",
            "parkCode": "acad",
            "description": "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
            "latitude": "44.409286",
            "longitude": "-68.247501",
            "latLong": "lat:44.409286, long:-68.247501",
            "activities": [
```


## Wireframes

- Homepage = https://wireframe.cc/HyFbTt
- Citation Page = https://wireframe.cc/sHV1m5

### MVP/PostMVP

#### MVP 

- Take a user input to search by State initials (ex.CT for Connecticut).
- Render a list of National Parks.
- Remove previous search results from the DOM.
- based on input, giving the name, image, description, and hours.

#### PostMVP  

- have a loading screen or icon.
- Add media queries for responsive design.
- give directions to the park .
- use css to manipulate the z-index to create a unique citation page.
- save the inputs of the user to create a recently searched list.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 17| Project Approval / Boilerplate HTML, CSS, etc. | Complete
|May 18| Pseudocode / Functional User Input JS | Complete
|May 19| Rough Draft CSS Layout (The final product but not refined) | Complete
|May 20| Finshed CSS refined look. attempted loading icon | Complete
|May 21| Presentations | Incomplete

## Priority Matrix

Matrix: https://wireframe.cc/3axgsI
## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Approval | H | 1hrs| .5 | .5 |
| Boilerplate (HTML, CSS, JS) | H | 2hrs| 1 | 1 |
| Pseudo Code | H | 2hrs| .5 | .5 |
| Link API | H | 2hrs| 1.5 | 1.5 |
| Make functioning search bar & button | H | 3hrs| 1.5 | 1.5 |
| Get the name, image, description, location, and hours for the parks | H | 3hrs| 4 | 4 |
| Append results to the DOM | H | 3hrs| 1.5 | 1.5 |
| Remove former searches | H | 2hrs| 1 | 1 |
| Check efficiency of code (could it be condensed) | H | 1hrs| 1 | 1 |
| Add image(s) to page (outside of the api) | H | 1hrs| .5 | .5 |
| Helper Bar (for state initials) | H | 2hrs| 2 | 2 |
| Manipulate CSS making with flexbox after rough CSS is down | H | 3hrs| 5 | 5 |
| Clean up CSS make it visually cohesive | H | 2hrs| 3 | 3 |
| Making changes for mobile | H | 3hrs| 3 | 3 |
| Loading icon | H | 3hrs| - | - |
| Total | H | 37hrs| hrs | hrs |

## Code Snippet

I'm proud of this code snippet because the way I chose to remove items from the
DOM made it so I could easily put in some basic into text on the main section of
the page so it wouldn't be as blank.

```
button.addEventListener('click', () => {
  const output = document.querySelector('#search-bar').value
  getParkNames(output)
  document.querySelector('.park-data').innerHTML = '<h1 class="about">About the Parks</h1>'
})
```

## Change Log
 Was able to get the loading screen funtional in time, but was not able to attach it to the webpage
