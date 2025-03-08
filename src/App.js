import {Component} from 'react'
import RecipeDetails from './RecipeDetails';
import './App.css';


const App=()=>{
  return(
    <div className='background-container'>
      <RecipeDetails menuLists={menuLists} filterMealType="Dinner"/>
    </div>
  )
}
  export default App

  const menuLists=[
    {
      "name": "Margherita Pizza",
      "chef": "Chef Giovanni",
      "totalRatings": 1200,
      "avgRating": 4.9,
      "uploadedOn": "2024-02-10",
      "mealType": "Dinner",
      "dishType": "Pizza",
      "testKitchenApproved": true,
      "contestWinner": true,
      "featured": true,
      "description": "A simple yet delicious pizza topped with fresh mozzarella, tomatoes, and basil.",
      "imgUrl": "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
    },
    {
      "name": "French Onion Soup",
      "chef": "Chef Pierre",
      "totalRatings": 750,
      "avgRating": 4.7,
      "uploadedOn": "2024-03-05",
      "mealType": "Lunch",
      "dishType": "Soup",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A rich and hearty soup with caramelized onions, beef broth, and melted cheese on toasted bread.",
      "imgUrl": "https://bunnyswarmoven.net/wp-content/uploads/2018/04/IMG_9176-1.jpg"
    },
    {
      "name": "Butter Chicken",
      "chef": "Chef Raj",
      "totalRatings": 1800,
      "avgRating": 4.9,
      "uploadedOn": "2024-02-20",
      "mealType": "Dinner",
      "dishType": "Curry",
      "testKitchenApproved": true,
      "contestWinner": true,
      "featured": true,
      "description": "A rich and creamy Indian curry made with marinated chicken, tomatoes, and butter.",
      "imgUrl": "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"
    },
    {
      "name": "Shrimp Pad Thai",
      "chef": "Chef Lin",
      "totalRatings": 640,
      "avgRating": 4.6,
      "uploadedOn": "2024-01-25",
      "mealType": "Dinner",
      "dishType": "Noodles",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A flavorful Thai noodle dish with shrimp, peanuts, and a sweet-savory tamarind sauce.",
      "imgUrl": "https://www.tasteofhome.com/wp-content/uploads/2018/06/Shrimp-Pad-Thai_EXPS_THN18_45967_D05_23_6b.jpg"
    },
    {
      "name": "Avocado Toast",
      "chef": "Chef Lisa",
      "totalRatings": 530,
      "avgRating": 4.5,
      "uploadedOn": "2024-02-15",
      "mealType": "Breakfast",
      "dishType": "Toast",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A healthy and delicious toast topped with creamy avocado, cherry tomatoes, and a drizzle of olive oil.",
      "imgUrl": "https://therecipecritic.com/wp-content/uploads/2020/01/avocado_toast.jpg"
    },
    {
      "name": "Chocolate Lava Cake",
      "chef": "Chef Maria",
      "totalRatings": 1100,
      "avgRating": 4.9,
      "uploadedOn": "2024-02-25",
      "mealType": "Dessert",
      "dishType": "Cake",
      "testKitchenApproved": true,
      "contestWinner": true,
      "featured": true,
      "description": "A rich chocolate cake with a gooey molten center, perfect for any sweet tooth.",
      "imgUrl": "https://www.yourhomebasedmom.com/wp-content/uploads/2020/02/chocoalte-lava-cake-for-two.jpg"
    },
    {
      "name": "Grilled Salmon",
      "chef": "Chef Thomas",
      "totalRatings": 900,
      "avgRating": 4.8,
      "uploadedOn": "2024-03-01",
      "mealType": "Dinner",
      "dishType": "Seafood",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A perfectly grilled salmon fillet with a lemon garlic butter sauce.",
      "imgUrl": "https://th.bing.com/th/id/OIP.p7Yk32-sJzmE5keNbDXcgwHaLH?rs=1&pid=ImgDetMain"
    },
    {
      "name": "Vegan Buddha Bowl",
      "chef": "Chef Olivia",
      "totalRatings": 680,
      "avgRating": 4.6,
      "uploadedOn": "2024-01-30",
      "mealType": "Lunch",
      "dishType": "Bowl",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A nutrient-packed bowl with quinoa, chickpeas, roasted veggies, and tahini dressing.",
      "imgUrl": "https://th.bing.com/th/id/OIP.P4QGMQf6tXrheEpYYZjCvAHaJ8?rs=1&pid=ImgDetMain"
    },
    {
      "name": "Egg Benedict",
      "chef": "Chef James",
      "totalRatings": 740,
      "avgRating": 4.7,
      "uploadedOn": "2024-02-12",
      "mealType": "Breakfast",
      "dishType": "Eggs",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A classic brunch dish with poached eggs, hollandaise sauce, and an English muffin.",
      "imgUrl": "https://www.cookingclassy.com/wp-content/uploads/2019/02/eggs-benedict-2.jpg"
    },
    {
      "name": "Mushroom Risotto",
      "chef": "Chef Antonio",
      "totalRatings": 860,
      "avgRating": 4.8,
      "uploadedOn": "2024-01-28",
      "mealType": "Dinner",
      "dishType": "Rice",
      "testKitchenApproved": true,
      "contestWinner": false,
      "featured": false,
      "description": "A creamy and flavorful Italian risotto with mushrooms and Parmesan cheese.",
      "imgUrl": "https://th.bing.com/th/id/OIP.OVYD-MTI6Mal4RCbjH8bBQHaKX?rs=1&pid=ImgDetMain"
    },
    {
      "name": "Peking Duck",
      "chef": "Chef Ming",
      "totalRatings": 990,
      "avgRating": 4.9,
      "uploadedOn": "2024-02-07",
      "mealType": "Dinner",
      "dishType": "Meat",
      "testKitchenApproved": true,
      "contestWinner": true,
      "featured": true,
      "description": "A famous Chinese dish with crispy duck skin, served with pancakes and hoisin sauce.",
      "imgUrl": "https://lakegenevacountrymeats.com/wp-content/uploads/Peking-Duck.jpg"
    }
  ]