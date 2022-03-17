import React, { useState } from 'react';
import Menu from '../Menu';
import Categories from '../Categories';
import items from '../data';


function App() {
  const [dishes, setDishes] = useState(items)
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);
  const [all, setAll] = useState(true);

  const showAll = () => {
    setAll(true);
    setBreakfast(false);
    setLunch(false);
    setShakes(false);
  }

   const showBreakfast = () => {
    setAll(false);
    setBreakfast(true);
    setLunch(false);
    setShakes(false);
  }

     const showLunch = () => {
    setAll(false);
    setBreakfast(false);
    setLunch(true);
    setShakes(false);
  }

   const showShakes = () => {
    setAll(false);
    setBreakfast(false);
    setLunch(false);
    setShakes(true);
  }

  const breakfastMenu = dishes.filter(dish => dish.category === 'breakfast');
  const lunchMenu = dishes.filter(dish => dish.category === 'lunch');
  const shakesMenu = dishes.filter(dish => dish.category === 'shakes');



  return (
    <main>
      <h1 className="title">Our Menu</h1>
      <div className="underline"></div>
      <nav className="btn-container">
        <button className="filter-btn" onClick={showAll}>All</button>
        <button className="filter-btn" onClick={showBreakfast}>Breakfast</button>
        <button className="filter-btn" onClick={showLunch}>Lunch</button>
        <button className="filter-btn" onClick={showShakes}>Shakes</button>
      </nav>
      <div>
        {all && 
          <div>
          <Categories menu={breakfastMenu} />
          <Categories menu={lunchMenu} />
          <Categories menu={shakesMenu} />
          </div>
        }
        {breakfast && 
        <div>
        <Categories menu={breakfastMenu} />
        </div>
        }
        {lunch && 
        <div>
        <Categories menu={lunchMenu} />
        </div>
        }
        {shakes && 
        <div>
        <Categories menu={shakesMenu} />
        </div>
        }


      </div>
    </main>
  
    );
}

export default App;
