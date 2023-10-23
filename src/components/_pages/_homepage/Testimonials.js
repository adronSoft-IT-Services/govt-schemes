import React from 'react'

const Testimonials = () => {
  return (
    <div className="section-padding bg-[url('/images/all-img/section-bg-12.png')] bg-no-repeat bg-cover">
      <div className="container">
        <div className="grid  lg:grid-cols-2 grid-cols-1  xl:gap-[60px] gap-6">
          <div>
            <div className="slider-nav">
              <div className="single-item">
                <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px] rounded-md">
                  <img src="/images/all-img/t1.png" alt="" className=" object-cover w-full h-full rounded-md" />
                </div>
              </div>
              <div className="single-item">
                <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px]  rounded-md">
                  <img src="/images/all-img/t1.png" alt="" className=" object-cover w-full h-full rounded-md" />
                </div>
              </div>
              <div className="single-item">
                <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px]  rounded-md">
                  <img src="/images/all-img/t1.png" alt="" className=" object-cover w-full h-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mini-title">Testimonial</div>
            <h4 className="column-title ">
              Our Tallented Students Valuable
              <span className="shape-bg text-black">
                Feedback</span>
            </h4>
            <div className="slider-for mt-10">
              <div className="single-item">
                <div>
                  <h3 className=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                  <div className="mb-8">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many
                    variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </div>
                  <div>
                    <span className=" block  font-semibold text-black mb-1">Alfred Helmerich</span>
                    <span className=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div>
                  <h3 className=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                  <div className="mb-8">
                    There are many variations of passages of Lorem Ipsum available,
                  </div>
                  <div>
                    <span className=" block  font-semibold text-black mb-1">Alfred Helmerich</span>
                    <span className=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div>
                  <h3 className=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                  <div className="mb-8">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                  </div>
                  <div>
                    <span className=" block  font-semibold text-black mb-1">Alfred Helmerich</span>
                    <span className=" block  font-semibold text-primary">Executive Training Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-x-5 flex lg:mt-10 mt-8">
              <button className="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                    hover:text-white shadow-box slickprev text-3xl text-primary">
                <iconify-icon icon="heroicons:arrow-left-20-solid"></iconify-icon>
              </button>
              <button className="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                    hover:text-white shadow-box slickprev text-3xl text-primary">
                <iconify-icon icon="heroicons:arrow-right-20-solid"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials