type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const FeaturedProducts: Products = [
  {
    id: 1,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p1.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 2,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p2.png",
    price: 23.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 3,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 4,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 5,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p5.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 6,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p6.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 7,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p7.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 8,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p8.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 9,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p9.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 10,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p10.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 11,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p11.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 12,
    title: "spicy arrabbiata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p12.png",
    price: 26.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 3,
      },
      {
        title: "large",
        additionalPrice: 5,
      },
    ],
  },
];

export const Pizzas: Products = [
  {
    id: 1,
    title: "sicilian",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p1.png",
    price: 25.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 4,
      },
      {
        title: "large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "sicilian",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p2.png",
    price: 24.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 4,
      },
      {
        title: "large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "big sicilian",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p3.png",
    price: 29.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 4,
      },
      {
        title: "large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "sicilian",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p4.png",
    price: 25.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 4,
      },
      {
        title: "large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "si",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p5.png",
    price: 21.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 4,
      },
      {
        title: "large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "sicilian",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/p6.png",
    price: 25.9,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "medium",
        additionalPrice: 4,
      },
      {
        title: "large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "sicilian",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
  img: "/temporary/p1.png",
  price: 25.9,
  options: [
    {
      title: "small",
      additionalPrice: 0,
    },
    {
      title: "medium",
      additionalPrice: 4,
    },
    {
      title: "large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "italian pastas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "italian burgers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/m2.png",
    color: "green",
  },
  {
    id: 1,
    slug: "pizzas",
    title: "italian pizzas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at architecto placeat aut exercitationem soluta?",
    img: "/temporary/m3.png",
    color: "red",
  },
];
