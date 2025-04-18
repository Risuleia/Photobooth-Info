import './styles.css'

export default function HowToUse() {
  return (
    <div id='how-to-use'>
      <div className='how-container'>
        <div className="section-heading">How to Use?</div>
        <div className="tutorial-video">
          <video src='/tutorial.mp4' autoPlay loop></video>
        </div>
      </div>
    </div>
  )
}