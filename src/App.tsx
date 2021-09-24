import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = new Set([...items.map((item) => item.category), 'all']);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(Array.from(allCategories));

  const filterItems = (category: string) => {
    setMenuItems((elements) => {
      if (category === 'all') {
        return items;
      }
      return items.filter((item) => item.category === category)
    });
  }

  return <main>
    <section className="menu">
      <div className="title">
        <div>Our Menu</div>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
