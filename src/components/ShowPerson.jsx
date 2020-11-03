import React from 'react';

const ShowPerson = props => {
    const {persons} = props;
    return (
        <div className="col-5 mx-auto card">
        <div className="card-body">
            <h4 className="card-title">{persons.firstname} {persons.lastname}</h4>
            <p className="card-text">{persons.email}</p>
            <p className="card-text">{persons.password}</p>
            <p className="card-text">{persons.confirmpassword}</p>
        </div>
    </div>
    );
}

export default ShowPerson;