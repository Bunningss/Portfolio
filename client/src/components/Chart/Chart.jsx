import './Chart.scss';

const Chart = ({ chart }) => {
  return (
    <div className='chart'>
        <p>{chart.name}</p>
        <footer>
            <div style={{backgroundColor: `${chart.color}`, width: `${chart.width}`}}></div>
        </footer>
    </div>
  )
}

export default Chart