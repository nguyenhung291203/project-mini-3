const fetchApi = async (api) => {
    const response = await fetch(api);
    const result = await response.json();
    return result;
};
displayProducts("http://localhost:3000/products");


const apiProductsFull = 'http://localhost:3000/products';

// fetchApi(apiProductsFull)
// .then(data=>{
//     return data.map(item=>item.category);
// })
// .then(data=>{
//     console.log(data);
// });




const displayCategories = () => {
    const getCategories = fetchApi("http://localhost:3000/products")
        .then(data => {
            return data.map(item => item.category);
        })
        .then(data => {
            return data.filter((item, index) => data.indexOf(item) === index);
        })
        .then(data => {
            let htmls = data.map(item => {
                return `
                    <div class="col-category">
                        <div class="category-item" onclick="select('${item}')">${item}</div>
                    </div>
                `;

            });



            htmls = htmls.join("");


            const categoryListRow = document.querySelector(".category-list .row");
            categoryListRow.innerHTML = htmls;
        });
};


displayCategories();

function select(categoryName) {
    console.log(`http://localhost:3000/products?category=${categoryName}`);
    displayProducts(`http://localhost:3000/products?category=${categoryName}`);
};


function displayProducts(api) {
    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                return `
                <div class="col-2">
                    <div class="productItem">
                    <img
                        src="${item.thumbnail}"
                        alt=""
                        class="productImg"
                    />
                    <div class="productDiscountPercentage">${item.discountPercentage.toFixed()}</div>
                    <div class="productContent">
                        <div class="productContentLeft">
                        <div class="productTitle">${item.title}</div>
                        <div class="productPrice">${item.price}$</div>
                        </div>
                        <div class="productContentRight">
                        <div class="productStock">Còn lại: ${item.stock} sp</div>
                        </div>
                    </div>
                    </div>
                </div>
            `;
            });
            const numberMax = htmls.length;

            htmls = htmls.join("");

            const productListRow = document.querySelector(".productList .row");
            productListRow.innerHTML = htmls;



            const buttonBefore = document.querySelector(".buttonBefore");
            const buttonAfter = document.querySelector(".buttonAfter");


            let currentPage = document.querySelector(".currentPage");
            let number = parseInt(currentPage.innerHTML);

            function ready() {
                buttonBefore.disabled = true;
            }
            
            function next() {
                number++;
                if (number == 3) {
                    buttonAfter.disabled = true;
                }
                buttonBefore.disabled = false;
                currentPage.innerHTML = number;
            }

            function back() {
                number--;
                if (i == 1) {
                  buttonBefore.disabled = true;
                }
                buttonAfter.disabled = false;
                currentPage.innerHTML = number;
              }
           

        });




};

