import Layout from "../components/Layout";
import "../style/profile.css";
import { Camera } from "lucide-react";


function Profile() {
  return (
    <Layout>

      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-image">
            <img src="https://i.pravatar.cc/150?img=5" alt="Profile" />
            
            <div className="camera-icon">
            <Camera size={15} strokeWidth={2.5}/>
          </div>
          </div>

          <div>
            <h3>Marry Doe</h3>
            <p>marrydoe@gmail.com</p>
          </div>

        </div>
        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </div>

    </Layout>
  );
}

export default Profile;