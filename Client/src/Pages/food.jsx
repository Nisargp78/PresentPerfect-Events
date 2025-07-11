import React from "react";
import food from '../css/Food.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Food = () => {
  return (
    <div className={food.body}>
    <Navbar />
      <section className={food.sec}>
        <h1 className={food.sec_h1}>Food Catering Services</h1>
        <p id={food.sec_p}>
          We offer a wide range of catering services to suit every event and occasion.
          From elegant plated meals to casual buffets and live food stations, we have everything you need to make your event unforgettable.
        </p>
        <div className={food.container}>
          {[
            { title: "Full-Service Catering", items: ["Menu Planning", "Service Staff", "Table Setup", "Cleanup"] },
            { title: "Buffet-Style Catering", items: ["Indian Cuisine", "Continental", "Asian Dishes", "Dessert Station"] },
            { title: "Live Food Stations", items: ["Pasta Station", "BBQ Station", "Chaat Counter", "Dessert Station"] },
            { title: "Plated Meal Service", items: ["Multi-Course Meals", "Gourmet Dishes", "Customized Menus"] },
            { title: "Drop-off Catering", items: ["Casual House Parties", "Corporate Lunches", "Baby Showers"] },
            { title: "Event-Specific Menus", items: ["Engagement Party", "Baby Shower", "Housewarming Party", "Corporate Events"] },
          ].map((service, index) => (
            <div className={food.item} key={index}>
              <section className={food.sec_boxes}>
                <h2>{service.title}</h2>
                <ul className={food.list}>
                  {service.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </section>
      <div className={food.personalized_section}>
              <h1>Event Food Products</h1>
              <p>Browse our diverse selection of food products, categorized to suit every event and occasion.</p>
              <h2 className={food.category_h2}>Appetizers</h2>
              <div className={food.products_container}>

                <div className={food.product}>
                  <img src="/content/Food/spring_rolls.jpg" alt="Spring Rolls" />
                  <h3>Spring Rolls</h3>
                  <p>Crispy and filled with vegetables, served with a tangy dipping sauce</p>
                </div>
                <div className={food.product}>
                  <img src="/content/Food/bruschetta.jpg" alt="bruschetta" />
                  <h3>Bruschetta</h3>
                  <p>Toasted bread topped with fresh tomatoes, basil, and olive oil</p>
                </div>
                <div className={food.product}>
                  <img src="/content/Food/Paneer tikka.jpg" alt="Paneer Tikka" />
                  <h3>Paneer Tikka</h3>
                  <p>Marinated paneer cubes grilled to perfection</p>
                </div>
              </div>

              <h2 className={food.category_h2}>Main Course</h2>
              <div className={food.products_container}>
                <div className={food.product}>
                <img src="/content/Food/paneer_butter_masala.jpg" id={food.img} />
                  <h3>Paneer Butter Masala</h3>
                  <p>Cottage cheese cubes in a creamy tomato-based gravy</p>
                </div>
                <div className={food.product}>
                <img src="/content/Food/Malai_Kofta.jpg" />
                  <h3>Malai Kofta</h3>
                  <p>Soft dumplings made from paneer and potatoes in a rich, creamy gravy</p>
                </div>
                <div className={food.product}>
                <img src="/content/Food/Dal Makhni.jpg" id={food.img} />
                  <h3>Dal Makhni</h3>
                  <p>Slow-cooked black lentils in a buttery tomato-based sauce</p>
                </div>
              </div>
      
              <h2 className={food.category_h2}>Desserts</h2>
              <div className={food.products_container}>
                <div className={food.product}>
                <img src="/content/Food/Gulab_jamun.jpg" />
                  <h3>Gulab Jamun</h3>
                  <p>Soft, deep-fried dumplings soaked in rose-flavored sugar syrup</p>
                </div>
                <div className={food.product}>
                <img src="/content/Food/carrot_halwa.jpg" id={food.img} />
                  <h3>Carrot Halwa</h3>
                  <p>Buttery tart crust filled with custard and fresh fruits</p>
                </div>
                <div className={food.product}>
                <img src="/content/Food/Chocolate Brownie.jpg" id={food.img} />
                  <h3>Chocolate Brownie</h3>
                  <p>Gooey chocolate brownie served warm</p>
                </div>
              </div>
              
              <h2 className={food.category_h2}>Beverages</h2>
              <div className={food.products_container}>
                <div className={food.product}>
                  <img src="/content/Food/Lemonade.jpg" id={food.img}/>
                  <h3>Fresh Lemonade</h3>
                  <p>Refreshing homemade lemonade with a hint of mint</p>
                </div>
                <div className={food.product}>
                  <img src="/content/Food/Watermelon Cooler.jpg" />
                  <h3>Watermelon Cooler</h3>
                  <p>Refreshing drink made with fresh watermelon juice</p>
                </div>
                <div className={food.product}>
                  <img src="/content/Food/Masala chai.jpg" />
                  <h3>Masala Chai</h3>
                  <p>Spiced Indian tea brewed with milk and aromatic spices</p>
                </div>
              </div>
        </div>
    </div>
  );
};

export default Food;
