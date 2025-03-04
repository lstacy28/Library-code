var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/World's%20Tallest%20Buildings.csv";
var buildingNames = getColumn(url, 2);
var buildingCitys = getColumn(url, 4);
var buildingCountrys = getColumn(url, 5);
var buildingHeight = getColumn(url, 6);
var floors = getColumn(url, 7);
var yearOpened = getColumn(url, 8);

//this function takes a country and returns all the tallest buildings in that country
//result{array} = all the buildings found in country, this is what the function is going to return
//country{string} = the data the user is going to input 
function countryBuildings(country){
var result = []
for(var i = 0; i < buildingNames.length; i++){
    if(country.toLowerCase().includes(buildingCountrys[i].toLowerCase()) || buildingCountrys[i].toLowerCase().includes(country.toLowerCase())){
        result.push(buildingNames[i]);
    }
}
if(result.length == 0){
    result = "No Buildings Found"
}
return result
}
console.log(countryBuildings("US"))


//this function takes a country, takes all the heigths of the buildings in that country and finally adds them
//buildingCountry{string} = the data the user is going to input
//return{number} is going to return the number corresponding to totalHeight
function getTotalHeights(buildingCountry){
    var totalHeight = 0
    for (var i = 0; i < buildingNames.length; i++){
        if(buildingCountry.toLowerCase().includes(buildingCountrys[i].toLowerCase()) || buildingCountrys[i].toLowerCase().includes(buildingCountry.toLowerCase())){            
            totalHeight = totalHeight + parseInt(buildingHeight[i])
     }  
}
if(totalHeight == 0){
    totalHeight = -1
}
return totalHeight
}
console.log(getTotalHeights("US"))


//this function takes a number of floors and finds the oldest building that has a larger amount of floors
//floor{string} = the number of floors that the building is going to be larger than, what the user is going to input  
//return{string} = the oldest building with that number of floors
function oldestBuildling(floor){
    var oldest = 100000000000000;
    var list = ""
    for (var i = 0; i < buildingNames.length; i++){
        if(parseFloat(floors[i]) > floor && parseFloat(yearOpened[i]) < oldest){
            oldest = yearOpened[i]
            list = buildingNames[i]
        }
    }
    if(list == ""){
        list = "No buildings found"
    }
return list
}

console.log(oldestBuildling(-140));


//this function takes a height and finds the closest building to that height
//height{number}= the data the user is going to input, is going to be the height that is closest the building that is going to be returned
//return{string}= the building that is the closest height to the height the user input
function getClosest(height){
    var result = buildingNames[index]
    var index = 0
    var closest = Math.abs(buildingHeight[0] - height)
    for(var i = 1; i < buildingHeight.length; i++){
        if (Math.abs(buildingHeight[i] - height) < closest) {
            closest = Math.abs(buildingHeight[i] - height)
            index = i
        }
    }
    if(index == 0){
        result = "No buildings found"
    }
    return result
}
console.log(getClosest("5000"))


// this function takes the country that the user input and finds the average height of all the buildings by dividing the amount of buildings by the total height.
//buildingCountry{string}= the information the user is going to input, the average is going to be of this string.
//return{number}= is going to return the average height of the country you chose.
function getAverageHeight(buildingCountry){
    var totalHeight = 0
    var numberOfBuildings = 0
    for (var i = 0; i < buildingNames.length; i++){
        if(buildingCountry.toLowerCase().includes(buildingCountrys[i].toLowerCase()) || buildingCountrys[i].toLowerCase().includes(buildingCountry.toLowerCase())){            totalHeight = totalHeight + parseInt(buildingHeight[i])
            numberOfBuildings++
     }  
}
if(numberOfBuildings == 0){ 
    return "No buildings found" }
    else{
return totalHeight/numberOfBuildings
    }
}
console.log(getAverageHeight("US"))



