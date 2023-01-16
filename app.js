// let allCatagories;
let allCatagories;
const getAllCatagories = async function () {
  try {
    const response = await axios.get("categories.json");
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
    alert(error);
  });
//get all product data
let allProductData;
const getAllProduct = async function () {
  try {
    const response = await axios.get("products.json");
    allProductData = response.data;
    return allProductData;
  } catch (error) {
    throw error;
  }
};
getAllProduct()
  .then((data) => {
    const favorits = cardsDivHeader("Favorit products");
    favoriteProduct(data, favorits);
    allCatagories.forEach((element) => {
      catagoryProduct(data, cardsDivHeader(element), element);
    });
  })
  .catch((error) => {
    alert(error);
  });
//header for card div
const cardsDivHeader = function (headerName) {
  //favorite product header
  const div = document.createElement("div");
  div.classList =
    "section-shadow w-[97%] m-auto text-center mt-6 border-b-4 border-gray-500";
  const span = document.createElement("span");
  span.classList = "text-2xl";
  span.append(headerName);
  div.append(span);
  document.querySelector("main").append(div);
  //a dive contain all faivorit product
  const cardsDiv = document.createElement("div");
  cardsDiv.classList = `${headerName.replace(
    /\s/g,
    ""
  )} p-9 w-[97%] m-auto overflow-x-auto flex mt-2 mb-9 scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-base-200`;
  document.querySelector("main").append(cardsDiv);
  return cardsDiv;
};
//show product base on catagory
const catagoryProduct = function (data, cardsDiv, catagoryName) {
  data.forEach((element) => {
    if (element.category == catagoryName) {
      cardsDiv.append(createCard(element));
    }
  });
};
const favoriteProduct = function (data, cardsDiv) {
  data.forEach((element) => {
    if (element.rating.rate >= 4.5) {
      cardsDiv.append(createCard(element));
    }
  });
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
