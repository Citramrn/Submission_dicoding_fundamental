import DataSearch from './search.js';

const main = () => {
    const searchFood = document.querySelector("#searchFood"); //placeholder gambar
    const searchButtonClick = document.querySelector("#searchButton"); // button cari
    const cardImage = document.querySelector("#cardImage"); //image makanan

    const onButtonSearchClicked = () => { //placeholder search
      DataSearch.searchfoods(searchFood.value)
      .then(renderResult)
    };

    const renderResult = result => {
        cardImage.innerHTML = "";
        result.forEach(food => { //image makanan
           const {strMealThumb, strMeal} = food;

            const foodElement = document.createElement("div");
            foodElement.setAttribute("class", "food");

            foodElement.innerHTML = `<img class="card-img-top" src="${strMealThumb}" alt="mealCitra">
                <div class="card-body"> 
                <p class="card-text"> ${strMeal} </p>
                </div>`;

            cardImage.appendChild(foodElement);
        })
    };
    searchButtonClick.addEventListener("click", onButtonSearchClicked);
};

export default main;