import Image from 'next/image'
import React from 'react'

const GeneralQuestions = () => {
  return (
    <div className="section-padding  bg-white bg-[url('/images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
          <div>
            <div className="mini-title">Frequently Asked Question</div>
            <div className="column-title ">
              General
              <span className="shape-bg">Questions</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <li>
                <button type="button" className="accrodain-button">
                  <span>What does it take excellent author?</span>
                  <span className="icon-pm"></span>
                </button>
                <div className="content hidden">
                  Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                  learning program that you complete at no additional cost.
                </div>
              </li>
              <li>
                <button type="button" className="accrodain-button">
                  <span>Who will view my content?
                  </span>
                  <span className="icon-pm"></span>
                </button>
                <div className="content hidden">
                  Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                  learning program that you complete at no additional cost.
                </div>
              </li>
              <li>
                <button type="button" className="accrodain-button">
                  <span>What does it take become an author?
                  </span>
                  <span className="icon-pm"></span>
                </button>
                <div className="content hidden">
                  Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                  learning program that you complete at no additional cost.
                </div>
              </li>
              <li>
                <button type="button" className="accrodain-button">
                  <span>How to Change my Password easily?</span>
                  <span className="icon-pm"></span>
                </button>
                <div className="content hidden">
                  Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                  learning program that you complete at no additional cost.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <Image width={640} height={632} src="/images/all-img/faq.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralQuestions