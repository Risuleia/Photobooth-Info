import './styles.css'

export default function Cashback() {
  return (
    <div id='cashback'>
      <div className='cashback-container'>
        <div className="section-heading">Cashback</div>
        <div className="cashback-text">
          <div className="cashback-title">
            Want ₹50 back? It’s easy!
          </div>
          <div className="cashback-content">
            Tag us in your Instagram story or post featuring your photobooth pictures.
            <br />
            Send us a screenshot of the post/story to support@memorabooth.com or DM us.
            <br />
            Once verified, you’ll receive a ₹50 cashback within 48 hours via UPI.
          </div>
          <div className="cashback-disclaimer">
            Limited to one cashback per session. Offer valid only on the day of usage.
          </div>
        </div>
      </div>
    </div>
  )
}