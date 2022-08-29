

if (typeof window !== 'undefined') {
    //var message:string = "Hello World hii" 
    // 1. Select the div element using the id property
    const app = document.getElementById("app");
    var middlesec = document.getElementById("middle_section")?.innerHTML;
    // 2. Create a new <p></p> element programmatically
    const p = document.createElement("p");
    // 3. Add the text content
    p.innerHTML = middlesec!;
    // 4. Append the p element to the div element
    app?.appendChild(p);
  } else {
    console.log('You are on the server')
  }