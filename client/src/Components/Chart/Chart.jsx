import './Chart.scss';

const Chart = ({ data }) => {
  return (
    <div className='chart'>
        <p className="label">{data.label}</p>
        <footer>
            <div className='slide' style={{backgroundColor: `${data.color}`, width: `${data.exp}%`}}></div>
        </footer>
    </div>
  )
}

export default Chart