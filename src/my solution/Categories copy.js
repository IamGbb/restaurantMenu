import React from 'react';

const Categories = (menu) => {
  console.log(menu.menu.length)
  const items = menu.menu;
  
  return (
    <section className="section-center">
      {items.map((item) =>{
        return(
        <div  key={item.id}>
          <div className="photo">
            <img src={item.img} alt={item.title} />
          </div>
          <h4>{item.title}</h4>
          <h4>${item.price}</h4>
          <hr/>
          <p>{item.desc}</p>
        </div>
        );
      })};
      </section>
    );
};

export default Categories;
