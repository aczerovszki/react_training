import React from "react";
import { Form, Col } from "react-bootstrap";
import "./Form.css";

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Search by description</Form.Label>
        
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            placeholder="Search"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Search by location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            placeholder="Search"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            label="Only Full Time"
            type="checkbox"
            className="mb-2"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
