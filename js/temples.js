
function buildCard(index) {

    let h3 = document.querySelector(".cardh3");
    let address = document.querySelector(".cardaddress");
    let state = document.querySelector(".cardstate");
    let phone = document.querySelector(".cardphone");
    let website = document.querySelector(".cardwebsite");
    let img = document.querySelector(".cardimg");

    h3.textContent = data[index].name;
    address.textContent = data[index].address;
    state.textContent = `${data[index].city}, ${data[index].state} ${data[index].zip}`;
    phone.textContent = data[index].phoneNumber;
    website.setAttribute("href", data[index].website); 
    website.setAttribute("target", "blank");   
    website.textContent = "Temple website";
    img.setAttribute("src", data[index].image);
    img.setAttribute("alt", data[index].name);
};