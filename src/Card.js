import './App.css'
function Card(props){
    return(
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.label}</h5>
            </div>
        </div>
    )
}

export default Card;