import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import "../style/welcome.css";
function Welcome() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="welcome-page">
        <div className="welcome-content">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

          <Button text="Create Account" className="primary" onClick={() => navigate("/register")}/>
          <Button text="Already Registered? Login" className="secondary"  onClick={() => navigate("login")} />

        </div>
      </div>
    </Layout>
  );
}

export default Welcome;