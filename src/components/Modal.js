import React from "react";
import '../modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    let modal
    if(this.state.isModalOpen){
      modal = (
        <div className='modal'>
          <div className='modal_content'>
            <p>モーダル!!!</p>
            <button onClick={ ()=> { this.toggleModal() } }>閉じる</button>
          </div>
        </div>
      )
    }
    return(
      <div>
        <button onClick={ () => { this.toggleModal() } }>モーダルを開く</button>
        {modal}
      </div>
    )
  }
}

export default Modal;
