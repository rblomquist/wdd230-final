const form = document.querySelector("#reservationformjs");
const h3 = document.querySelector("#reservationformjs h3");



h3.textContent = "Reception Hall";


for (let i = 1; i < 5; i++) {

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");

    label.setAttribute("class", "text");
    span.setAttribute("class", "inputname")

    label.append(span);

    if (i == 1){
        setTextAttributes("Guests", "guests", "Max 80", "required");
        label.append(input);
    };

    if (i == 2) {
        // for (let x = 1; x < 3; x++) {
            const label1 = document.createElement("label");
            const label2 = document.createElement("label");
            const label3 = document.createElement("label");
            // if (x == 1) {
                setRadio1Attribute("Food", "Seafood", "Food", "required");
                label1.append(input);
            // }
            // else if(x == 2) {
                setRadio2Attribute("Food", "BBQ", "Food", "required");
                label2.append(input);
            // }
            // else if (x == 3) {
                setRadio3Attribute("Food", "Pasta", "Food", "required");
                label3.append(input);
            // }
        // };
    }
    else if (i == 3) {
        setTextAttributes("truck", "text", "Food", "Max 80", "required");
        label.append(input);    
    };

    function setTextAttributes(spantext, name, placeholder, required) {
        span.textContent = spantext;

        input.setAttribute("type", "text");
        input.setAttribute("name", name);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("required", required);
    };

    function setRadio1Attribute(spantext, item, name, required) {
        span.textContent = spantext;
        label.append(span);
        span.textContent = item;
        input.setAttribute("type", "radio");
        input.setAttribute("name", name);
        input.setAttribute("required", required);
        input.setAttribute("value", item);
    };
    function setRadio2Attribute(spantext, item, name, required) {
        span.textContent = spantext;
        label.append(span);
        span.textContent = item;
        input.setAttribute("type", "radio");
        input.setAttribute("name", name);
        input.setAttribute("required", required);
        input.setAttribute("value", item);
    };
    function setRadio3Attribute(spantext, item, name, required) {
        span.textContent = spantext;
        label.append(span);
        span.textContent = item;
        input.setAttribute("type", "radio");
        input.setAttribute("name", name);
        input.setAttribute("required", required);
        input.setAttribute("value", item);
    };

    
    function setSelectAttributes(spantext, name, required){
        let main = ["Salmon", "Halibut", "Lobster"]
        span.textContent = spantext;
        
        input.setAttribute("type", "select");
        input.setAttribute("name", name);
        input.setAttribute("required", required);
    };



    form.append(label);
};

// # of guests
// food selection
//     Main
//     side:
//     desseert:
//     drink:
// setup/cleanup
// music:
