import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile data</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <p className="text-center">
                <strong>Email:</strong> {currentUser.email}
              </p>
              <div className="w-100 text-center mb-2">
                <Button variant="link" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Profile;
