import React from "react";

class ChangeText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '茂野吾郎'
    }
  }
  changeName(name) {
    this.setState({
      name: name
    })
  }
  render() {
    return (
      <div>
        <h2>こんにちは{this.state.name}さん</h2>
        <button onClick={ () => this.changeName('茂野吾郎') }>茂野吾郎に変更</button>
        <button onClick={ () => this.changeName('佐藤寿也') }>佐藤寿也に変更</button>
      </div>
    );
  }
}

export default ChangeText;
