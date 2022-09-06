import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Austin",
      email: "austin7443@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "ussd@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "shirt",
      image: "/images/pl.webp",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "2",
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "pants",
      image: "/images/pl2.jpg",
      price: 65,
      countInStock: 5,
      brand: "puma",
      rating: 4.5,
      numReviews: 12,
      description: "high quality product",
    },
    {
      //_id: "3",
      name: "Louis Vuitton",
      slug: "louis-vuitton-shirt",
      category: "shirt",
      image: "/images/pl3.webp",
      price: 25,
      countInStock: 10,
      brand: "Louis",
      rating: 4.5,
      numReviews: 17,
      description: "high quality product",
    },
    {
      //_id: "4",
      name: "Christan Dior",
      slug: "christan-dior-pant",
      category: "pant",
      image: "/images/pl4.webp",
      price: 50,
      countInStock: 7,
      brand: "Dior",
      rating: 4.5,
      numReviews: 7,
      description: "high quality product",
    },
  ],
};

export default data;
