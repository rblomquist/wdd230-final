
const url = "json/temples.json";
let data;
let index = 0;
let weatherurl;
getData();


function getApi() {
    weatherurl = data[index].api;
};

function previous() {
    index -= 1;
    if(index < 0) {
        index = 3;   
    }
    getData();
};

function next() {
    index += 1;
    if(index > 3) {
        index = 0;
    }
    getData();
};

async function getData() {

    // Creates temple card
    let templeresponse = await fetch(url);
    if (templeresponse.ok) {
        data = await templeresponse.json();
        buildCard(index);
    };
    
    // sets new API for weather
    getApi()

    // Creates weather card
    let weatherresponse = await fetch(weatherurl);
    if (weatherresponse.ok) {
        weatherdata = await weatherresponse.json();
        buildCurrentWeather(weatherdata);
        buildForecastCard(weatherdata, 1, 1);
        buildForecastCard(weatherdata, 2, 2);
        buildForecastCard(weatherdata, 3, 3);
    };
    
};
