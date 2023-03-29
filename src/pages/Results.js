import '../App.css'

function Results(props) {
    return (
        <div className='Results'>
            {props.correct.map(item => {
                return (
                    <div className='Item Correct' key={item.keys[0]}>
                        <img
                            src={"https://flagcdn.com/w80/" + item.image.toLowerCase()}
                            srcset={"https://flagcdn.com/w160/" + item.image.toLowerCase() + " 2x"}
                            width="80"
                            alt={item.keys[0]}
                        />
                        {item.keys[0]}
                    </div>
                )
            })}
            {props.incorrect.map(item => {
                return (
                    <div className='Item Incorrect' key={item.keys[0]}>
                        <img
                            src={"https://flagcdn.com/h40/" + item.image.toLowerCase()}
                            srcset={"https://flagcdn.com/h80/" + item.image.toLowerCase() + " 2x"}
                            height="40"
                            alt={item.keys[0]}
                        />
                        {item.keys[0]}
                    </div>
                )
            })}
            
        </div>
    )
} export default Results