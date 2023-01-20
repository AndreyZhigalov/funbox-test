import { useState } from "react";
import Card from "./components/Card";

import assort from "./assets/assort.json"
import pet from "./assets/images/Photo.png"


function App() {
  const [goods, setGoods] = useState(assort)

  const onClickCard = (id) => {
    setGoods(goods => goods.map(good => good.id === id ? { ...good, selected: !good.selected } : good));
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="main-title">Ты сегодня покормил кота?</h2>
        <div className="cards-container">
          {goods.map(item => <Card item={item} onClickCard={onClickCard} pet={pet} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
