import db from "@/firebase/firebaseConfig";
let products = [
  {
    description:
      " Crosshatched leather with matching trim bookstripe printed on poly twill lining style",
    categoryId: "124873",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch51.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch51.png"
    ],
    name: "Michael Kors",
    price: 199,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "A collectable piece with no need for introductions, coming in new old stock condition with original case and papers.",
    categoryId: "1243376",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/cartier21.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/cartier21.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/cartier22.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/cartier23.png"
    ],
    name: "Cartier",
    price: 4999,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      " Crosshatched leather with matching trim bookstripe printed on poly twill lining style",
    categoryId: "1243",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse1.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse1.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse11.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse13.png"
    ],
    name: "Kate Spade",
    price: 650,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "23176762",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch41.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch41.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch24.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch26.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse44.jpeg",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch23.png"
    ],
    name: "Fossil",
    price: 99,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "231767562",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch21.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch21.png"
    ],
    name: "Blue Fossil",
    price: 89,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "A collectable piece with no need for introductions, coming in new old stock condition with original case and papers.",
    categoryId: "23152",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/glasses51.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/glasses51.png"
    ],
    name: "Red D & G",
    price: 179,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "There's always time for wine when you wear this gorgeous merlot leather strap timepiece from kate spade new york's Metro collection.",
    categoryId: "124533",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch71.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch71.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch72.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch75.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch76.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch77.png"
    ],
    name: "Kate Spade",
    price: 299,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      " Crosshatched leather with matching trim bookstripe printed on poly twill lining style",
    categoryId: "124873",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch51.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch51.png"
    ],
    name: "Michael Kors",
    price: 199,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "There's always time for wine when you wear this gorgeous merlot leather strap timepiece from kate spade new york's Metro collection.",
    categoryId: "124533",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch71.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch71.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch72.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch75.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch76.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch77.png"
    ],
    name: "Kate Spade",
    price: 299,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "231762",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch25.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch25.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch24.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch26.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse44.jpeg",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch23.png"
    ],
    name: "Fossil",
    price: 99,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "23176762",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch41.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch41.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch24.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch26.png",
      "http://iosapptemplates.com/wp-content/uploads/2017/11/purse44.jpeg",
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch23.png"
    ],
    name: "Fossil",
    price: 99,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "231767562",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch61.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch61.png"
    ],
    name: "Kate S",
    price: 279,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "231767562",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch21.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch21.png"
    ],
    name: "Blue Fossil",
    price: 89,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  },
  {
    description:
      "Kate Spade New York, The cameron street lottie is a dream mix of streamlined sophistication and everyday ease. Worn cross body, in the crook of your elbow or carried in hand",
    categoryId: "231767562",
    image_url:
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch11.png",
    images: [
      "http://iosapptemplates.com/wp-content/uploads/2017/12/watch11.png"
    ],
    name: "Kors Black",
    price: 249,
    quantity: 20,
    addToCart: false,
    addToWishList: false
  }
];
export const saveAllProducts = () => {
  products.forEach(function(obj) {
    db.collection("Products")
      .add({
        categoryId: obj.categoryId,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        images: obj.images,
        image_url: obj.image_url,
        date: Date.now()
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  });
};
