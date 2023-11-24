import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import readings from "../assets/svg/asset-readings.svg";
import contributions from "../assets/svg/asset-contribution.svg";
import styles from "./ProfileUser.module.css";


function Profile() {
  const [photoPreview, setPhotoPreview] = useState('');

  const updatePhoto = (e) => {
    const input = document.getElementById('file');
    const previewPhoto = document.getElementById('previewPhoto');

    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setPhotoPreview(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const resetPhoto = () => {
    const previewPhoto = document.getElementById('previewPhoto');
    const input = document.getElementById('file');

    // Set a default image or leave it empty based on your preference
    previewPhoto.src = 'path/to/default-image.jpg'; // Replace with your default image path
    input.value = ''; // Reset the input file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <Row>
        <h1 className="text-center">Profile</h1>
      </Row>

      <Row className="justify-content-center mt-5 mb-5">
        <Col md={6}>
          <Card className="p-5 shadow">
            <Row className="justify-content-center">
              <div id="photoContainer" className={styles.photoContainer}>
                <img
                  id="previewPhoto"
                  src={photoPreview}
                  alt="Preview"
                  className={styles.previewPhoto}
                />
              </div>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="d-flex justify-content-center">
                  <label htmlFor="file" className="btn btn-light bgWarna text-white"
                  id={styles.bgupdatePhoto}>
                    <input
                      type="file"
                      id="file"
                      style={{ display: 'none'}}
                      onChange={updatePhoto}
                    />
                    Update Photo
                  </label>
                  <Button
                    variant="link"
                    className="text-decoration-none text-black"
                    onClick={resetPhoto}
                  >
                    Reset
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Container>
      <Row className="justify-content-center align-items-center">
        <Col lg={4} md={4} sm={12}>
          <div className="bgWarna rounded p-3 text-center" id={styles.bgReadings}>
            <img className="img-fluid w-25" src={readings} alt="" />
            <div className="text-white fs-2 mt-3">120</div>
            <div className="text-white fs-2">Readings</div>
          </div>
        </Col>
        <Col lg={1} md={1} sm={3} className='col12 mt-2'></Col>
        <Col lg={4} md={4} sm={12}>
          <div className="bgWarna rounded p-3 text-center" id={styles.bgContributions}>
            <img className="img-fluid w-25" src={contributions} alt="" />
            <div className="text-white fs-2 mt-3">10</div>
            <div className="text-white fs-2">Contribution</div>
          </div>
        </Col>
      </Row>
      </Container>
      <br />
      <br />
      <br />
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="nama-lengkap">Nama lengkap</Form.Label>
                <Form.Control type="text" id="nama" />
              </Form.Group>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control type="email" id="email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="jenis-kelamin">Jenis kelamin</Form.Label>
                <Form.Select id="jenis-kelamin">
                  <option>Laki - laki</option>
                  <option>Perempuan</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="no-tlp">No telepon</Form.Label>
                <Form.Control type="text" id="no-tlp" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="bio">Bio</Form.Label>
                <Form.Control type="text" id="bio" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col>
              <div className="d-flex justify-content-center">
                <Button type="submit" className="btn btn-light bgWarna text-white" id={styles.bgupdateProfile}>
                  Update Profile
                </Button>
                <Button
                  variant="link"
                  className="text-decoration-none text-black"
                  type="reset"
                >
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container className="mt-5">
        <h1 className="text-center mb-5">Bookmark</h1>
        <Card id={styles.bgBookmarks}>
          <Row className="justify-content-center p-5">
            <Col>
              <Card>bookmark</Card>
            </Col>
            <Col>
              <Card>bookmark</Card>
            </Col>
            <Col>
              <Card>bookmark</Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </Container> 
    
  );
}

export default Profile;
