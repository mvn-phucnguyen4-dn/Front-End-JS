
const myRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomPrice = () => Math.floor(Math.random() * 10 +1 ) * 100;
const random1000 = Math.floor(Math.random() * 1000);
const mylocation = `${cities[random1000].city}, ${cities[random1000].state}`;

const generateCampgrounds = () => {
  const campgrounds = [];
  for (let i=0; i<20; i++) {
    campgrounds.push(
      {
        id : i,
        location : mylocation,
        title : `${myRandom(descriptors)}, ${myRandom(places)}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem atque repudiandae quasi nostrum laborum facilis reiciendis, magni illo. Quod aliquid excepturi itaque. Quis repudiandae mollitia, aspernatur dolor saepe nihil blanditiis.',
        price: randomPrice(),
        image: 'https://res.cloudinary.com/duy-t-n/image/upload/v1638868069/YelpCamp/pexels-xue-guangjian-1687845_lp7zty.jpg',
        createdAt: new Date()
      });
  }
  return campgrounds;
}
