import './playbutton.css';

function PlayButton(){
    function handleclick(){
        console.log('CLICKED')
    }
    return(
        <button onClick={(handleclick)}>See Details</button>
    )
}
export default PlayButton;