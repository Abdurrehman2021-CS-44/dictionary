import React from "react";

const Response = (props)=>{
    return (
        <div className="container mb-5">
            <div className="row justify-content-md-center">
                <div className="col-lg-5 col-md-7">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{props.word}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"> {props.isValid && "Definition"} </h6>
                            <p className="card-text" style={{textAlign: "justify"}}> {props.definition_1} <br /> {props.definition_2} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Response;