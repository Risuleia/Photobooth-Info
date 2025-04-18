import qr from '../../assets/Images/feedback-qr.svg'

import './styles.css'

export default function Support() {
  const fields = [
    {
    	label: "Contact number",
    	value: "7550154640"
    },
    {
    	label: "Support mail",
    	value: "support@memorabooth.com"
    },
    {
    	label: "Supporting hours",
    	value: "10 am to 6pm"
    }
  ]

  return (
    <div id='support'>
      <div className='support-container'>
        <div className="section-heading">Support</div>
        <div className="support-fields">
          {fields.map((field, index) => (
            <div className="field-item" key={index}>
              <div className="field-label">{field.label}:</div>
              <div className="field-value">{field.value}</div>
            </div>
          ))}
          <div className="field-qr">
            <div className="field-label">Feedback form:</div>
            <div className="qr">
              <img src={qr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}