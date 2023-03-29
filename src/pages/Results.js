import '../App.css'

function Results(props) {
    return (
        <div className='Results'>
            {props.correct.map(item => {
                return (
                    <div className='Item Correct' key={item.keys[0]}>
                        <img src={'/small-flags/' + item.image} height='40' alt={item.keys[0]}/>
                        {item.keys[0]}
                    </div>
                )
            })}
            {props.incorrect.map(item => {
                return (
                    <div className='Item Incorrect' key={item.keys[0]}>
                        <img src={'/small-flags/' + item.image} height='40' style={{margin: 5}} alt={item.keys[0]}/>
                        {item.keys[0]}
                    </div>
                )
            })}
            
        </div>
    )
} export default Results