// alert('Hello welcome coming')
// let f = confirm('Assalomu Aleykum')
// let i = prompt('Ismingiz')
// console.log(i);

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Farid";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})