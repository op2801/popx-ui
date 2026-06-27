import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import "../style/register.css";

function Register() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/profile");
  };

  return (

    <Layout>
      <div className="page register-page">
        <h1>Create your   <br/> PopX account</h1>

        <Input label="Full Name" placeholder="Marry Doe" required/>
        <Input label="Phone number" placeholder="9876543210" required/>
        <Input label="Email address" placeholder="marry@gmail.com" required/>
        <Input label="Password" type="password" placeholder="********" required/>
        <Input label="Company name" placeholder="PopX"/>

        <div className="radio-group">
          <p>Are you an Agency?<span>*</span></p>
          <div className="radio-options">
            <label>
              <input type="radio" name="agency" defaultChecked/>Yes
            </label>

            <label>
              <input type="radio" name="agency"/>No
            </label>

          </div>
        </div>

        <Button text="Create Account" className="primary register-btn" onClick={handleSubmit}/>
      </div>

    </Layout>

  );
}

export default Register;