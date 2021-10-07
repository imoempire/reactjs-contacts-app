import React from "react";
import { connect } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "../Action/authActions";

const Login = (props) => {
    if(!props.auth.isLoaded) return null;
    if(props.auth.uid) props.history.push('/')
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.loginWithEmail(email, password);
  };

  return (
    <div>
      <h1>LogIn Now</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <hr />
        <button type="submit">Login</button>
        <button type="submit" onClick={props.loginWithGoogle}>
          <img
            src="https://mpng.subpng.com/20180723/btg/kisspng-google-logo-google-search-google-images-g-suite-google-adwords-5b5695e47fdc94.0743248315324011245237.jpg"
            width="35px"
          />SigIn  with Google
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginWithEmail,
  loginWithGoogle
};

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
