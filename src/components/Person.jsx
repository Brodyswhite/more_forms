import React from 'react';

const Person = props => {

    const {inputs,handleChange,handleSubmit} = props;


    return (
        <>
        <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>
            <h2 className="text-center">Create ID</h2>
            <div className="form-group">
                <label >First Name</label>
                <input 
                type="text"
                className="form-control"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
                />
                <span className="text-danger">{ inputs.firstname.length > 2 ? "" : "Must be longer than two characters." } </span>
            </div>
            <div className="form-group">
                <label >Last Name</label>
                <input 
                type="text"
                className="form-control"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                />
                <span className="text-danger">{ inputs.lastname.length > 2 ? "" : "Must be longer than two characters." } </span>                
            </div>
            <div className="form-group">
                <label >Email</label>
                <input 
                type="text"
                className="form-control"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                />
                <span className="text-danger">{ inputs.email.length > 5 ? "" : "Must be longer than five characters." } </span>                
            </div>
            <div className="form-group">
                <label >Password</label>
                <input 
                type="password"
                className="form-control"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                />
                <span className="text-danger">{ inputs.password.length > 8 ? "" : "Must be longer than eight characters." }</span>
                <span className="text-danger"> {inputs.password !== inputs.confirmpassword ? "" : "Passwords must match." } </span>
            </div>
            <div className="form-group">
                <label >Confirm Password</label>
                <input 
                type="password"
                className="form-control"
                name="confirmpassword"
                value={inputs.confirmpassword}
                onChange={handleChange}
                />
                <span className="text-danger">{ inputs.confirmpassword.length > 8 ? "" : "Must be longer than eight characters." } </span>
                <span className="text-danger"> {inputs.password !== inputs.confirmpassword ? "" : "Passwords must match." } </span>
            </div>
            <input type="submit" value="Create ID" className="btn btn-success"/>
        </form>
        </>
    );
}

export default Person;