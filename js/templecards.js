const url = "json/temples.json";
let data;
let index = 0
const container = document.querySelector("#templesection");

getData();


async function getData() {

    // Creates temple card
    let templeresponse = await fetch(url);
    if (templeresponse.ok) {
        data = await templeresponse.json();
        buildCards(index);
    };
};

function buildCards(index) {

    for (let i = 1; i < 5; i++) {
        const div = document.createElement("div");
        div.addEventListener("click", function() {templeInfo(i - 1)});

        console.log(index);
        div.setAttribute("class", "blackborder templecard");

        let h3 = document.createElement("h3");
        let address = document.createElement("p");
        let state = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let img = document.createElement("img");

        h3.textContent = data[index].name;
        address.textContent = data[index].address;
        state.textContent = `${data[index].city}, ${data[index].state} ${data[index].zip}`;
        phone.textContent = data[index].phoneNumber;
        website.setAttribute("href", data[index].website); 
        website.setAttribute("target", "blank");   
        website.textContent = "Temple website";
        img.setAttribute("src", data[index].image);
        img.setAttribute("alt", data[index].name);

        div.append(img);
        div.append(h3);

        container.append(div);

        index ++;
    };
};

function templeInfo(index) {

    let card = document.querySelector("#templeinformation");
    
    let font = document.querySelector("#baptismfont");
    let celestialroom = document.querySelector("#celestialroom");
    let sealingroom = document.querySelector("#sealingroom");

    let baptismcaption = document.querySelector("#baptismcaption");
    let sealingcaption = document.querySelector("#sealingcaption");
    let celestialcaption = document.querySelector("#celestialcaption");

    card.classList.remove("hidden");
    card.classList.add("active");

    font.setAttribute("src", data[index].baptismfont);
    font.setAttribute("alt", "baptism font");
    baptismcaption.textContent = "Baptismal font";

    celestialroom.setAttribute("src", data[index].celestialroom);
    celestialroom.setAttribute("alt", "Celestial room");
    celestialcaption.textContent = "Celestial room";

    sealingroom.setAttribute("src", data[index].sealingroom);
    sealingroom.setAttribute("alt", "Sealing room");
    sealingcaption.textContent = "Sealing room";

    let cardh3 = document.querySelector(".cardh3");
    let address = document.querySelector(".cardaddress");
    let state = document.querySelector(".cardstate");
    let phone = document.querySelector(".cardphone");
    let website = document.querySelector(".cardwebsite");
    let img = document.querySelector(".cardimg");

    cardh3.textContent = data[index].name;
    address.textContent = data[index].address;
    state.textContent = `${data[index].city}, ${data[index].state} ${data[index].zip}`;
    phone.textContent = data[index].phoneNumber;
    website.setAttribute("href", data[index].website); 
    website.setAttribute("target", "blank");   
    website.textContent = "Temple website";
    img.setAttribute("src", data[index].image);
    img.setAttribute("alt", data[index].name);

    
    document.querySelector("#templeclosure h3").textContent = "Temple Closures";
    document.querySelector("#templeclosure").setAttribute("class", "blackborder");
    let closurelist = document.querySelector("#templeclosurelist");

    if (closurelist.hasChildNodes()) {
        while (closurelist.hasChildNodes()) {
            closurelist.removeChild(closurelist.firstChild);
        };
        data[index].closures.forEach((item) => {
            let li = document.createElement("li")
            li.textContent = item
            closurelist.append(li);
        });    
    }   
    else {
        data[index].closures.forEach((item) => {
            let li = document.createElement("li")
            li.textContent = item
            closurelist.append(li);
        });    
    }

    document.querySelector("#templeservices h3").textContent = "Temple Services";
    document.querySelector("#templeservices").setAttribute("class", "blackborder");
    let service = document.querySelector("#addservice");

    if (service.hasChildNodes()) {
        while (service.hasChildNodes()) {
            service.removeChild(service.firstChild);
        };
        data[index].services.forEach((item) => {
            let li = document.createElement("li")
            li.textContent = item
            service.append(li);
        });
    }   
    else {
        data[index].services.forEach((item) => {
            let li = document.createElement("li")
            li.textContent = item
            service.append(li);
        });    
    }

    document.querySelector("#templelinks").setAttribute("class", "blackborder");
    document.querySelector("#templelinks h3").textContent = "Temple Links";
    document.querySelector(".cardappointment").setAttribute("href", data[index].appointment); 
    document.querySelector(".cardappointment").setAttribute("target", "blank");   
    document.querySelector(".cardappointment").textContent = "Make an appointment";

    document.querySelector(".prayerroll").setAttribute("href", data[index].prayerroll); 
    document.querySelector(".prayerroll").setAttribute("target", "blank");   
    document.querySelector(".prayerroll").textContent = "Add name to the prayer roll";
};