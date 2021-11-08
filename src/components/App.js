import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChangeText from "./ChangeText";
import Modal from "./Modal";
import Form from "./Form";

class App extends React.Component {
  render() {
    const playerList = [
      {
        position: "ピッチャー",
        name: "茂野吾郎",
      },
      {
        position: "キャッチャー",
        name: "佐藤寿也",
      },
      {
        position: "ファースト",
        name: "ギブソンjr",
      },
    ];
    return (
      <div>
        <Header />
        <ChangeText />
        <h3>モーダル</h3>
        {playerList.map((playerItem, index) => {
          return (
            <Modal
              key={index}
              position={playerItem.position}
              name={playerItem.name}
            />
          );
        })}
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
