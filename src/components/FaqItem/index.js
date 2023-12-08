// Write your code here.
import {Component} from 'react'
import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isShowAnswer: false}

  onToggleActive = () => {
    this.setState(prevState => ({
      isShowAnswer: !prevState.isShowAnswer,
    }))
  }

  renderAnswer = () => {
    const {isShowAnswer} = this.state
    const {questionDetails} = this.props
    const {answerText} = questionDetails
    if (isShowAnswer) {
      return (
        <div className="answer-container">
          <hr className="hr-line" />
          <p className="displayed-answer"> {answerText} </p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isShowAnswer} = this.state
    const image = isShowAnswer ? minusIcon : plusIcon
    const imageAlt = isShowAnswer ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleActive}>
        <img src={image} alt={imageAlt} className="button-image" />
      </button>
    )
  }

  render() {
    const {questionDetails} = this.props
    const {questionText} = questionDetails
    return (
      <li className="question-answers">
        <div className="each-question">
          <h1 className="question"> {questionText} </h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
