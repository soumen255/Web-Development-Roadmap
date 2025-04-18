// This code demonstrates the concept of reflow and repaint in the browser.
// It creates 100 paragraphs and appends them to the document body.
const t1 = performance.now();
for (let i = 0; i < 100; i++) {
    let p = document.createElement("p");
    p.textContent = "Hello  World! para " + i;
    document.body.appendChild(p);

}
const t2 = performance.now();
console.log("First Method: Time taken to create 100 paragraphs: " + (t2 - t1) + " milliseconds");

//code 2 : more efficient way to create 100 paragraphs
const t3 = performance.now();
let mydif = document.createElement("div");
for (let i = 0; i < 100; i++) {
    let p = document.createElement("p");
    p.textContent = "Hello  World! para " + i;
    mydif.appendChild(p);
}
document.body.appendChild(mydif);
const t4 = performance.now();
console.log("Seconed Method :Time taken to create 100 paragraphs: " + (t4 - t3) + " milliseconds");

//code 3 : more efficient way to create 100 paragraphs
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    let p = document.createElement("p");
    p.textContent = "Hello  World! para " + i;
    fragment.appendChild(p);

}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("Third Method :Time taken to create 100 paragraphs: " + (t6 - t5) + " milliseconds");