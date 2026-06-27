import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import "../style/login.css";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <Layout>

      <div className="page login-page">
        <h1>Signin to your <br/> PopX account</h1>

        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <Input label="Email Address" placeholder="Enter email address"/>
        <Input type="password"label="Password" placeholder="Enter password"/>
       <Button text="Login" className="login-btn" onClick={handleLogin}/>
      </div>

    </Layout>
  );
}

export default Login;