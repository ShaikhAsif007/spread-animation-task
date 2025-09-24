const cl = console.log;

let spread = document.getElementById("spread");

let getInnerHtml = spread.innerHTML;

cl(getInnerHtml)

let arr = [...getInnerHtml];

cl(arr)

let result = arr.map(ele => `<span>${ele}</span>`).join("");

spread.innerHTML = result;
