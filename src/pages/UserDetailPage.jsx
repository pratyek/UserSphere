import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found!</p>;

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <button
          className="btn btn-secondary mb-4"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <h2 className="card-title">{user.name}</h2>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="card-text">
          <strong>Company:</strong> {user.company.name}
        </p>
        <p className="card-text">
          <strong>Website:</strong>{" "}
          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserDetailPage;
