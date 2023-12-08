// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faq-container">
          <div className="questions-container">
            <h1 className="faq-heading"> FAQs </h1>
            <ul className="question-answer-container">
              {faqsList.map(eachQuestion => (
                <FaqItem key={eachQuestion.id} questionDetails={eachQuestion} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
