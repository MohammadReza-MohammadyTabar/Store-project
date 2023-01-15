// let allCatagories;
const getAllCatagories = async function () {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    allCatagories = response.data;

    return allCatagories;
  } catch (error) {
    throw error;
  }
};
getAllCatagories()
  .then((data) => {
    data.forEach((element) => {
      const a = document.createElement("a");
      a.textContent = element;
      const li = document.createElement("li");
      li.append(a);

      document.querySelectorAll(".catagoriesMenu")[0].append(li);
    });
    document.querySelectorAll(".catagoriesMenu")[1].innerHTML =
      document.querySelectorAll(".catagoriesMenu")[0].innerHTML;
  })
  .catch((error) => {
    console.log(error);
  });
//get all product data
let allProductData;
const getAllProduct = async function () {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    allProductData = response.data;
    return allProductData;
  } catch (error) {
    throw error;
  }
};
getAllProduct()
  .then((data) => {
    data.forEach((element) => {
      favoriteProduct(element);
    });
    document.querySelector("main").append(favoriteCardsDiv);
  })
  .catch((error) => {
    console.log(error);
  });

//show product base on catagory
const catagoryProduct = function (data) {};
const favoriteCardsDiv = document.createElement("div");
favoriteCardsDiv.classList =
  "favoritCards p-9 w-[97%] m-auto overflow-x-auto flex mt-2 mb-9 scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-base-200";
//favorite product in main page
// const favoriteCardsDiv = document.querySelector(".favoritCards");
const favoriteProduct = function (data) {
  if (data.rating.rate >= 4.5) {
    favoriteCardsDiv.append(createCard(data));
  }
};
//create card element function
const createCard = function (data) {
  //card div class list = "flex-none mr-3 card w-full max-w-sm bg-base-300 rounded-lg shadow-;g opacity-75 hover:opacity-100 mt-3"
  const card = document.createElement("div");
  card.classList =
    "flex-none mr-3 card w-full max-w-sm bg-base-300 rounded-lg shadow-;g opacity-75 hover:opacity-100 mt-3";
  //image in card is inside an anchor tag
  const imageAnchor = document.createElement("a");
  const image = document.createElement("img");
  image.src = data.image;
  image.alt = data.title;
  image.classList = "p-8 rounded-t-lg object-contain h-72 ";
  imageAnchor.classList = "mx-auto";
  imageAnchor.append(image);
  //card content div
  const cardContentDiv = document.createElement("div");
  cardContentDiv.classList = "px-5 pb-5";
  //card title and ancor and h5
  const titleDiv = document.createElement("div");
  titleDiv.classList = "w-[344px] h-[84px] ";
  const titleAnchor = document.createElement("a");

  const titleH5 = document.createElement("h5");
  titleH5.classList = "text-xl font-semibold tracking-tight";
  titleH5.textContent = data.title;
  titleAnchor.append(titleH5);
  titleDiv.append(titleAnchor);
  //rating span
  const ratingSpan = document.createElement("span");
  ratingSpan.textContent = data.rating.rate;
  ratingSpan.classList =
    "bg-blue-100 text-blue-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3";
  //price span and add to cart anchor are in a div
  const priceAndAddtoCartDiv = document.createElement("div");
  priceAndAddtoCartDiv.classList = "flex items-center justify-between";
  const priceSpan = document.createElement("span");
  priceSpan.classList = "text-3xl font-bold";
  priceSpan.textContent = "$" + data.price;
  const addToCardAnchor = document.createElement("a");
  addToCardAnchor.classList =
    " text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  addToCardAnchor.textContent = "Add to cart";
  priceAndAddtoCartDiv.append(priceSpan, addToCardAnchor);
  cardContentDiv.append(titleDiv, ratingSpan, priceAndAddtoCartDiv);
  card.append(imageAnchor, cardContentDiv);
  //   favoriteCardsDiv.append(card);
  return card;
};
