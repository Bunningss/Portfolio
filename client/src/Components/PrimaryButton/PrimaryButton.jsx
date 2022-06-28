import './PrimaryButton.scss';

const PrimaryButton = ({ text, onClick }) => {
  return (
        <button onClick={onClick} className="btnPrimary">{text}</button>
  )
}

export default PrimaryButton