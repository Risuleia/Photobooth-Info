import './styles.css'

export default function Footer({
  backCallback = () => {}
}: {
  backCallback?: () => void
}) {
  return (
    <div id="footer">
      <button className="back-btn" onClick={() => backCallback()}>Back</button>
    </div>
  )
}