import './body.css'
import slack_img from "../assests/media/slack_img.png"
import google_logo from "../assests/media/google-logo.jpg"
 
const Body = () => {
  return (
    <section className='body-main'>
        <div className='body-left'>
            <p className='body-heading'>Slack is where the future works</p>
            <p className='body-para'>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
            <div className='action-btn'>
              <button className='body-free-btn'> TRY FOR FREE </button>
              <button className='google-btn'> <img className='google-icon' src={google_logo} alt='google-icon'/>  SIGN UP WITH GOOGLE </button>
            </div>
        </div>

        <img className='body-image' src={slack_img} alt="slack-image" />
    </section>
  )
}

export default Body