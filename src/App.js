import React from "react";

import Form from "./components/Form";

import "./App.css";

const handleSubmit = values => alert(JSON.stringify(values));
const initialValues = {};

const App = () => {
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

export default App;
