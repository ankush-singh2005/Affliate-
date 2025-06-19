import React, { useState, useNavigate } from "react";

const Login = ({updateUserDetails}) => {

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {

  }
  const validate = () => {

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(validate()){
        if(formData.username === "admin" && formData.password === "admin"){
            updateUserDetails({
                name: "John",
                email : "John@email"
            });

        }
        else{
            setMessage("Invalid Credentials");
        }
    }

  };
  return <div></div>;
};

export default Login;
