import React from 'react';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4">
        <div className="card">
            <img className="card-img-top rounded mx-auto d-block" style={{padding: '3px', width: '100px', height: '100px'}}src="https://images.vexels.com/media/users/3/131136/isolated/preview/4c711c7ec7a01da4a8adf53684a13209-aumentar-gr-fico-de-linha-multicolor-by-vexels.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</a>
            </div>
        </div>
    </div>
);

export default HomeCard;