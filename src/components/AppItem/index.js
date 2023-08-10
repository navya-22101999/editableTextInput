import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  state = {
    inputText: '',
    isClicked: false,
  }

  onInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {inputText, isClicked} = this.state
    return (
      <>
        <div className="mainContainer">
          <div className="mini-container">
            <h1>Editable Text Input</h1>
            <div>
              {isClicked === false ? (
                <div>
                  <input
                    type="text"
                    value={inputText}
                    className="inp"
                    onChange={this.onInputText}
                  />
                  <button className="but" type="button" onClick={this.onButton}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="p-con">
                  <p className="p">{inputText}</p>
                  <button type="button" className="but" onClick={this.onButton}>
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default AppItem
