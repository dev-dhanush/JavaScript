const initialState = {
  products: [
    {
      id: 1,
      title: "Apple iPhone 8 Plus Gold 256GB 4G",
      description:
        "Meld style and practicality with the Apple iPhone 8 Plus smartphone",
      price: " 339.97",
      image: "../images/1.jpg",
      amount: 5,
    },
    {
      id: 2,
      title: 'Apple MacBook Pro Core i5 2.5GHz 13"',
      description:
        "This MacBook Pro has been professionally restored to working order by an approved vendor",
      price: " 649.54",
      image: "../images/2.jpg",
      amount: 3,
    },
    {
      id: 3,
      title: "Canon EOS M50 Mirrorless Camera Body",
      description:
        "2160p UHD Video Recording, Built-in Flash, Body only, Auto Focus, AE/FE Lock, Tripod Thread",
      price: " 450.00",
      image: "../images/3.jpeg",
      amount: 4,
    },
    {
      id: 4,
      title: 'VIZIO D-Series D24F-F1 24" Full HD Smart TV',
      description:
        'VIZIO D-Series D24F-F1 24" Full HD LED Smart TV. Condition is Manufacturer refurbished',
      price: " 1100.99",
      image: "../images/4.jpg",
      amount: 2,
    },
  ],
};
const productReducer = (state = initialState, action) => {
  return state;
};
export default productReducer;
