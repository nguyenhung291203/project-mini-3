const fetchApi = async (api) => {
    const response = await fetch(api);
    const result = await response.json();
    return result;
};


// const apiCategory = "https://json-server-vercel-data.vercel.app/category";
// const apiProductsALl = "https://fe-project-mini-3.netlify.app/database.json";
// let apiCurrent = apiProductsALl;

// // Hiện thị danh mục sản phẩm
// const displayCategory = fetchApi(apiProductsALl)
//     .then(data=>{
//         return data.map(item=>item.category);
//     })
//     .then(data=>{
//         return data.filter((item,index)=>data.indexOf(item)==index);
//     })
//     .then(data => {
//         let htmls = data.map(item => {
//             return `
//             <div class="col-category">
//                 <div class="category-item" onclick="select('${apiProductsALl}?category=${item}')">${item}</div>
//             </div>
//         `;
//         })
//         htmls = htmls.join("");
//         const categoryListRow = document.querySelector(".category-list .row");
//         categoryListRow.innerHTML = htmls;
//     })

// const select = (api) => {
//     apiCurrent = api;
//     console.log(apiCurrent)

//     displayProducts(api);
// };

// displayProducts(apiProductsALl)

// function displayProducts(api) {
//     fetchApi(api)
//         .then(data => {
//             let htmls = data.map(item => {
//                 return `
//                     <div class="col-2">
//                         <div class="productItem">
//                         <img
//                             src="${item.thumbnail}"
//                             alt=""
//                             class="productImg"
//                         />
//                         <div class="productDiscountPercentage">${item.discountPercentage.toFixed()}%</div>
//                         <div class="productContent">
//                             <div class="productContentLeft">
//                             <div class="productTitle">${item.title}</div>
//                             <div class="productPrice">${item.price}$</div>
//                             </div>
//                             <div class="productContentRight">
//                             <div class="productStock">Còn lại: ${item.stock} sp</div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//             `;
//             });
//             htmls = htmls.join("");
//             console.log(data.length);
//             const productListRow = document.querySelector(".productList .row");
//             productListRow.innerHTML = htmls;

//         })
// };


// const productSearch = () => {
//     const productInput = document.getElementById("productInput");
//     const productValue = productInput.value;

//     if (productValue !== "") {
//         productInput.value = "";
//         apiCurrent = `${apiProductsALl}?q=${productValue}`;
//         displayProducts(apiCurrent);
//     }
// };

// const change = () => {
//     const selectInput = document.getElementById("selectInput");
//     // displayProducts(`${apiProductsALl}${selectInput.value}`)
//     if (apiCurrent !== apiProductsALl) {
//         displayProducts(`${apiCurrent}&${selectInput.value}`);
//     } else {
//         displayProducts(`${apiCurrent}?${selectInput.value}`);
//     }
// };

// function restSelectInput(){
//     const selectInput = document.getElementById("selectInput");

// }

// const selectInput = document.getElementById("selectInput");


// const buttonPrev = document.getElementById("button--prev");
// const buttonNext = document.getElementById("button--next");
// const currentPage = document.getElementById("currentPage");
// let currentPageValue = currentPage.innerHTML;

// displayPage(currentPageValue);

// const next = () => {
//     currentPageValue++;
//     displayPage(currentPageValue);

// }

// const back = () => {
//     if (currentPageValue==1)
//         buttonPrev.disabled = true;
//     currentPageValue--;
//     displayPage(currentPageValue);

// }

// function displayPage(number) {
//     currentPage.innerHTML = number;
// };




fetchApi("https://fe-project-mini-3.netlify.app/database.json")
.then(data=>{
    console.log(data);
})