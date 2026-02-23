import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import menu_all from "./menu_All.png";
import menu_1 from "./menu_1.png";
import menu_3 from "./menu_3.png";
import menu_2 from "./menu_2.png";
import menu_4 from "./menu_4.png";
import menu_5 from "./menu_5.png";
import menu_6 from "./menu_6.png";
import menu_7 from "./menu_7.png";
import menu_8 from "./menu_8.png";

import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";
import food_10 from "./food_10.png";
import food_11 from "./food_11.png";
import food_12 from "./food_12.png";
import food_13 from "./food_13.png";
import food_14 from "./food_14.png";
import food_15 from "./food_15.png";
import food_16 from "./food_16.png";
import food_17 from "./food_17.png";
import food_18 from "./food_18.png";
import food_19 from "./food_19.png";
import food_20 from "./food_20.png";
import food_21 from "./food_21.png";
import food_22 from "./food_22.png";
import food_23 from "./food_23.png";
import food_24 from "./food_24.png";
import food_25 from "./food_25.png";
import food_26 from "./food_26.png";
import food_27 from "./food_27.png";
import food_28 from "./food_28.png";
import food_29 from "./food_29.png";
import food_30 from "./food_30.png";
import food_31 from "./food_31.png";
import food_32 from "./food_32.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  { menu_name: "All", menu_image: menu_all },
  {
    menu_name: "Rolls",
    menu_image: menu_2,
  },
  {
    menu_name: "Pure Veg",
    menu_image: menu_6,
  },
  {
    menu_name: "Salad",
    menu_image: menu_1,
  },
  {
    menu_name: "Desserts",
    menu_image: menu_3,
  },
  {
    menu_name: "Sandwich",
    menu_image: menu_4,
  },
  {
    menu_name: "Cake",
    menu_image: menu_5,
  },
  {
    menu_name: "Pasta",
    menu_image: menu_7,
  },
  {
    menu_name: "Noodles",
    menu_image: menu_8,
  },
];




export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food_1,
    category: "Salad",
    description: "Fresh healthy Greek salad with olives and feta cheese",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 3.7,
    ratingCount: 84,
    isVeg: true,
    isBestseller: false,
    isRecommended: true,
  },
  {
    _id: "2",
    name: "Veg Salad",
    image: food_2,
    category: "Salad",
    description: "Fresh mixed vegetable salad",
    price: 180,
    originalPrice: 220,
    discount: 18,
    rating: 4.7,
    ratingCount: 210,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "3",
    name: "Clover Salad",
    image: food_3,
    category: "Salad",
    description: "Healthy clover green salad bowl",
    price: 160,
    originalPrice: 190,
    discount: 16,
    rating: 4.4,
    ratingCount: 132,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "4",
    name: "Chicken Salad",
    image: food_4,
    category: "Salad",
    description: "Protein rich chicken salad",
    price: 240,
    originalPrice: 270,
    discount: 11,
    rating: 3.0,
    ratingCount: 60,
    isVeg: false,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    category: "Rolls",
    description: "Cheesy lasagna stuffed rolls",
    price: 140,
    originalPrice: 170,
    discount: 18,
    rating: 3.2,
    ratingCount: 54,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    category: "Rolls",
    description: "Spicy peri peri flavored rolls",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 4.2,
    ratingCount: 145,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "7",
    name: "Chicken Rolls",
    image: food_7,
    category: "Rolls",
    description: "Juicy chicken stuffed rolls",
    price: 200,
    originalPrice: 240,
    discount: 17,
    rating: 4.4,
    ratingCount: 176,
    isVeg: false,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "8",
    name: "Veg Rolls",
    image: food_8,
    category: "Rolls",
    description: "Classic veg rolls",
    price: 150,
    originalPrice: 180,
    discount: 17,
    rating: 3.7,
    ratingCount: 90,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },

  // -------- DESSERTS --------

  {
    _id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    category: "Desserts",
    description: "Creamy ripple ice cream scoop",
    price: 140,
    originalPrice: 170,
    discount: 18,
    rating: 4.0,
    ratingCount: 102,
    isVeg: true,
    isBestseller: false,
    isRecommended: true,
  },
  {
    _id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    category: "Desserts",
    description: "Fruit flavored creamy ice cream",
    price: 220,
    originalPrice: 260,
    discount: 15,
    rating: 3.7,
    ratingCount: 74,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    category: "Desserts",
    description: "Jar packed premium ice cream",
    price: 100,
    originalPrice: 130,
    discount: 23,
    rating: 4.2,
    ratingCount: 180,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    category: "Desserts",
    description: "Classic vanilla ice cream",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 3.7,
    ratingCount: 88,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },

  // -------- SANDWICH --------

  {
    _id: "13",
    name: "Chicken Sandwich",
    image: food_13,
    category: "Sandwich",
    description: "Grilled chicken sandwich",
    price: 120,
    originalPrice: 160,
    discount: 25,
    rating: 4.4,
    ratingCount: 192,
    isVeg: false,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "14",
    name: "Vegan Sandwich",
    image: food_14,
    category: "Sandwich",
    description: "Healthy vegan sandwich",
    price: 180,
    originalPrice: 210,
    discount: 14,
    rating: 3.7,
    ratingCount: 70,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "15",
    name: "Grilled Sandwich",
    image: food_15,
    category: "Sandwich",
    description: "Crispy grilled sandwich",
    price: 160,
    originalPrice: 190,
    discount: 16,
    rating: 4.6,
    ratingCount: 220,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "16",
    name: "Bread Sandwich",
    image: food_16,
    category: "Sandwich",
    description: "Classic bread sandwich",
    price: 240,
    originalPrice: 270,
    discount: 11,
    rating: 4.0,
    ratingCount: 100,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },

  // -------- CAKE --------

  {
    _id: "17",
    name: "Cup Cake",
    image: food_17,
    category: "Cake",
    description: "Soft and fluffy cupcake",
    price: 140,
    originalPrice: 170,
    discount: 18,
    rating: 4.6,
    ratingCount: 160,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "18",
    name: "Vegan Cake",
    image: food_18,
    category: "Cake",
    description: "Delicious vegan cake",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 3.7,
    ratingCount: 75,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "19",
    name: "Butterscotch Cake",
    image: food_19,
    category: "Cake",
    description: "Butterscotch flavored cake",
    price: 200,
    originalPrice: 240,
    discount: 17,
    rating: 3.0,
    ratingCount: 48,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "20",
    name: "Sliced Cake",
    image: food_20,
    category: "Cake",
    description: "Fresh sliced cake piece",
    price: 150,
    originalPrice: 180,
    discount: 17,
    rating: 3.3,
    ratingCount: 64,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },

  // -------- PURE VEG --------

  {
    _id: "21",
    name: "Garlic Mushroom",
    image: food_21,
    category: "Pure Veg",
    description: "Garlic butter mushroom",
    price: 140,
    originalPrice: 170,
    discount: 18,
    rating: 3.7,
    ratingCount: 80,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "22",
    name: "Fried Cauliflower",
    image: food_22,
    category: "Pure Veg",
    description: "Crispy fried cauliflower",
    price: 220,
    originalPrice: 250,
    discount: 12,
    rating: 4.0,
    ratingCount: 140,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "23",
    name: "Mix Veg Pulao",
    image: food_23,
    category: "Pure Veg",
    description: "Flavorful mix veg pulao",
    price: 100,
    originalPrice: 130,
    discount: 23,
    rating: 3.7,
    ratingCount: 92,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "24",
    name: "Rice Zucchini",
    image: food_24,
    category: "Pure Veg",
    description: "Zucchini rice bowl",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 4.5,
    ratingCount: 168,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },

  // -------- PASTA --------

  {
    _id: "25",
    name: "Cheese Pasta",
    image: food_25,
    category: "Pasta",
    description: "Cheesy creamy pasta",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 3.7,
    ratingCount: 85,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "26",
    name: "Tomato Pasta",
    image: food_26,
    category: "Pasta",
    description: "Tangy tomato pasta",
    price: 180,
    originalPrice: 220,
    discount: 18,
    rating: 4.6,
    ratingCount: 205,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "27",
    name: "Creamy Pasta",
    image: food_27,
    category: "Pasta",
    description: "White sauce creamy pasta",
    price: 160,
    originalPrice: 190,
    discount: 16,
    rating: 4.2,
    ratingCount: 150,
    isVeg: true,
    isBestseller: false,
    isRecommended: true,
  },
  {
    _id: "28",
    name: "Chicken Pasta",
    image: food_28,
    category: "Pasta",
    description: "Chicken loaded pasta",
    price: 240,
    originalPrice: 280,
    discount: 14,
    rating: 3.7,
    ratingCount: 77,
    isVeg: false,
    isBestseller: false,
    isRecommended: false,
  },

  // -------- NOODLES --------

  {
    _id: "29",
    name: "Butter Noodles",
    image: food_29,
    category: "Noodles",
    description: "Simple butter noodles",
    price: 140,
    originalPrice: 170,
    discount: 18,
    rating: 3.8,
    ratingCount: 110,
    isVeg: true,
    isBestseller: false,
    isRecommended: false,
  },
  {
    _id: "30",
    name: "Veg Noodles",
    image: food_30,
    category: "Noodles",
    description: "Stir fried veg noodles",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 4.0,
    ratingCount: 175,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
  {
    _id: "31",
    name: "Somen Noodles",
    image: food_31,
    category: "Noodles",
    description: "Authentic somen noodles",
    price: 200,
    originalPrice: 230,
    discount: 13,
    rating: 4.2,
    ratingCount: 140,
    isVeg: true,
    isBestseller: false,
    isRecommended: true,
  },
  {
    _id: "32",
    name: "Cooked Noodles",
    image: food_32,
    category: "Noodles",
    description: "Freshly cooked noodles",
    price: 150,
    originalPrice: 180,
    discount: 17,
    rating: 4.6,
    ratingCount: 220,
    isVeg: true,
    isBestseller: true,
    isRecommended: true,
  },
];