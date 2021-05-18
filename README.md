# National-Parks-Info-App

# Project Overview

## Project Name

National Parks App

## Project Description

An application that gives the user the chance to look up a multitude of national parks and get information and images on them back in a visually pleasing mannor. I want to give knowledge about the parks to the public that isn't convoluted and hard to get to. Hopefully giving a visually stunning page.


## API and Data Sample

https://developer.nps.gov/api/v1/parks?stateCode=ME&api_key=iDGndNNbXpQ40TKBbBOEIetSM80ONg1kacWC9Pvn

```
{
    "total": "1",
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
|May 18| Pseudocode / Functional User Input JS | Incomplete
|May 19| Rough Draft CSS Layout (The final product but not refined) | Incomplete
|May 20| Finshed CSS refined look. attempted loading icon | Incomplete
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
| Check efficiency of code (could it be condensed) | H | 1hrs|  |  |
| Add image(s) to page (outside of the api) | H | 1hrs| .5 | .5 |
| Manipulate CSS making with flexbox after rough CSS is down | H | 3hrs|  |  |
| Clean up CSS make it visually cohesive | H | 2hrs|  |  |
| Making changes for mobile | H | 3hrs|  |  |
| Loading icon | H | 3hrs|  |  |
|  | H | 3hrs|  |  |
| (Attempt) Create Divs for Citation page | H | 2hrs|  |  |
| (Attempt) Make citation page appear with click of the button | H | 3hrs|  |  |
| Total | H | 38hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
