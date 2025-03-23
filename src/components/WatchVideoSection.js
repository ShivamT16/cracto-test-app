import './watchVideoSection.css'
import random_img from "../assests/media/random-img.png"

const WatchVideoSection = () => {
  return (
    <section className='watchSection-main'>

        <img className='watchSection-image' src={random_img} alt="slack-image" />

        <div className='body-left'>
            <p className='watchSection-heading'>Now is your moment to build a better tommorow</p>
            <p className='watchSection-para'>We've seen what the future can be. Now it's time to decide what it will be.</p>
            <div className='action-btn'>
              <button className="sales-btn"> WATCH VIDEO </button>
              {/* <button className='google-btn'> <img className='google-icon' src={google_logo} alt='google-icon'/>  SIGN UP WITH GOOGLE </button> */}
            </div>
        </div>
    </section>
  )
}

export default WatchVideoSection