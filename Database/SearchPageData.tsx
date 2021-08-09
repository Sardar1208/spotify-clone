const SearchPageData = {
  category: [
    "Pop",
    "Bollywood",
    "Indie",
    "Folk & Acoustic",
    "Podcasts",
    "New Releases",
    "Made For You",
    "Concerts",
  ],

  images: ["cat1.jpeg", "cat2.png", "cat3.jpg", "cat4.jpeg"],
  colors: ["red", "green", "yellow", "purple", "indigo", "green"],
};

export function getRandomSuggestion() {
  const category =
    SearchPageData.category[
      Math.floor(Math.random() * SearchPageData.category.length)
    ];

  const image =
    SearchPageData.images[
      Math.floor(Math.random() * SearchPageData.images.length)
    ];

  const color =
    SearchPageData.colors[
      Math.floor(Math.random() * SearchPageData.colors.length)
    ];

  return { category: category, image: image, color: color };
}
