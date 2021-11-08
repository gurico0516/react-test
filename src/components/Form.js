import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: "",
      hasEmailError: false,
      content: "",
      hasContentError: false,
    };
  }
  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = event.target.value === "";
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }
  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = event.target.value === "";
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }
  handleSubmit() {
    this.setState({
      isSubmitted: true,
    });
  }
  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = <p>メールアドレスを入力してください</p>;
    }
    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = <p>問合せ内容を入力してください</p>;
    }
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = <p>送信完了</p>;
    } else {
      contactForm = (
        <div>
          <p>メールアドレス</p>
          <input
            type="text"
            value={this.state.email}
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />
          {emailErrorText}
          <p>問合せ内容</p>
          <textarea
            value={this.state.content}
            onChange={(event) => {
              this.handleContentChange(event);
            }}
          />
          { contentErrorText }
          <input
            type="submit"
            value="送信"
            onClick={() => {
              this.handleSubmit();
            }}
          />
        </div>
      );
    }
    return <div>{contactForm}</div>;
  }
}

export default Form;
