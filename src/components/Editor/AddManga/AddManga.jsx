import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useFormik } from 'formik';

import { getMangas } from '../../../actions/libraryActions';

const AddManga = (props) => {
  // const [formData, setFormData] = useState({
  //   id: '',
  //   title: '',
  //   author: '',
  //   artist: '',
  //   description: '',
  //   genres: '',
  //   publishYear: '',
  //   publishStatus: ''
  // });

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      author: '',
      artist: '',
      description: '',
      genres: '',
      publishYear: '',
      publishStatus: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  useEffect(() => {
    props.getMangas();
  }, []);

  // const handleChange = (event) => {
  //   // console.log(event.target);
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  // };

  const handleSubmit = () => {
    
  }

  return (
    <div>
      <Link to="/editor">Back</Link>
      {/* <div style={{ color: "white" }}>{formData.title} {formData.author} {formData.artist}</div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ minWidth: "600px", color: "white" }}>
          <Alert variant="danger" style={{ width: "600px" }} show={false}>
            <Alert.Heading>Éc</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  id="id"
                  name="id"
                  placeholder="Manga Id (This will be used for manga directory)" 
                  onChange={formik.handleChange}
                  value={formik.values.id}
                />
              </Form.Group>

              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  id="title" 
                  name="title" 
                  placeholder="Manga Title" 
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  id="author"
                  name="author" 
                  placeholder="Author Name" 
                  onChange={formik.handleChange}
                  value={formik.values.author}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="artist">
                <Form.Label>Artist</Form.Label>
                <Form.Control
                  id="artist"
                  name="artist" 
                  placeholder="Artist Name" 
                  onChange={formik.handleChange}
                  value={formik.values.artist}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="cover">
              <Form.Label>Cover Image</Form.Label>
              <Form.Control
                id="cover"
                name="cover" 
                placeholder="Cover Image Path" 
                onChange={formik.handleChange}
                value={formik.values.cover}
              />
            </Form.Group>

            <Form.Group controlId="genres">
              <Form.Label>Genres</Form.Label>
              <Form.Control
                id="genres"
                name="genres"
                placeholder="List Genres, seperated by comma (temporary, will make it easier later)" 
                onChange={formik.handleChange} 
                value={formik.values.genres}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Manga Description</Form.Label>
              <Form.Control 
                as= "textarea"
                rows="4"
                id="description"
                name="description"
                placeholder="Manga Description" 
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="pubYear">
                <Form.Label>Publish Year</Form.Label>
                <Form.Control
                  id="publishYear"
                  name="publishYear"
                  placeholder="Publish Year" 
                  onChange={formik.handleChange}
                  value={formik.values.publishYear}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="pubStatus">
                <Form.Label>Publish Status</Form.Label>
                <Form.Control
                  id="publishStatus"
                  name="publishStatus"
                  placeholder="Publish Status" 
                  onChange={formik.handleChange}
                  value={formik.values.publishStatus}
                />
              </Form.Group>
            </Form.Row>

            <Button 
              variant="primary" 
              style={{ float: "right" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  library: state.library
});

export default connect(mapStateToProps, { getMangas })(AddManga);