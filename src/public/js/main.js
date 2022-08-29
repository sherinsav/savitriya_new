var _a;
if (typeof window !== 'undefined') {
    //var message:string = "Hello World hii" 
    // 1. Select the div element using the id property
    var app = document.getElementById("app");
    var middlesec = (_a = document.getElementById("middle_section")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    // 2. Create a new <p></p> element programmatically
    var p = document.createElement("p");
    // 3. Add the text content
    p.innerHTML = middlesec;
    // 4. Append the p element to the div element
    app === null || app === void 0 ? void 0 : app.appendChild(p);
}
else {
    console.log('You are on the server');
}
