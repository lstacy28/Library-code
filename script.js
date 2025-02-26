var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/World's%20Tallest%20Buildings.csv";
var buildingNames = getColumn(url, 2);
var buildingCitys = getColumn(url, 4);
var buildingCountrys = getColumn(url, 5);
var buildingHeight = getColumn(url, 6);
var floors = getColumn(url, 7);
var yearOpened = getColumn(url, 8);


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
console.log(countryBuildings("44"))


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
return totalHeight+" feet"
}
console.log(getTotalHeights("china"))


function oldestBuidling(floor){
    var oldest = 100000000000000;
    var list = ""
    for (var i = 0; i < buildingNames.length; i++){
        if(parseFloat(floors[i]) > floor && parseFloat(yearOpened[i]) < oldest){
            oldest = yearOpened[i]
            list = buildingNames[i]
        }
    }
return list
}
console.log(oldestBuidling(100));


function getClosest(height){
    var bestIndex = 0
    var closest = Math.abs(buildingHeight[0] - height)
    for(var i = 1; i < buildingHeight.length; i++){
        if (Math.abs(buildingHeight[i] - height) < closest) {
            closest = Math.abs(buildingHeight[i] - height)
            bestIndex = i
        }
    }
    return buildingNames[bestIndex]
}
console.log(getClosest(800))


function getAvarageHeight(buildingCountry){
    var totalHeight = 0
    var numberOfBuildings = 0
    for (var i = 0; i < buildingNames.length; i++){
        if(buildingCountry.toLowerCase().includes(buildingCountrys[i].toLowerCase()) || buildingCountrys[i].toLowerCase().includes(buildingCountry.toLowerCase())){            
            totalHeight = totalHeight + parseInt(buildingHeight[i])
            numberOfBuildings++
     }  
}
if(numberOfBuildings == 0){
return "No buildings found"
}else{
return totalHeight/numberOfBuildings+" feet"
}
}
console.log(getAvarageHeight("china"))



