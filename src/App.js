import CategoryList from "./components/category-list/category-list.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      subtitle: "Shop now",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      subtitle: "Shop now",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      subtitle: "Shop now",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Women",
      subtitle: "Shop now",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Men",
      subtitle: "Shop now",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return <CategoryList categories={categories} />;
};

export default App;
