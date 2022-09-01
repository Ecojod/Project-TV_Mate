import React from 'react'

function ShoWitems({ showName , imgUrl, language, summary, brief}) {
    return (
        <div>
            <div className="card my-3">
                <img src={imgUrl} className="card-img-top" alt="..." style={{height:"270px", objectFit:'contain'}}/>
                <div className="card-body">
                    <h5 className="card-title">{showName}</h5>
                    <h5>Language - <span>{language}</span> </h5>
                    <p className="card-text">{brief} </p>
                    <a href={summary} className="btn btn-sm btn-primary">Summary</a>
                </div>
            </div>
        </div>
    )
}

export default ShoWitems