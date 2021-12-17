import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';

const EmployeeComponent = () => {


  //Validation Rules
  return (
    <Formik
      initialValues={{
        name: '',
        salary: '',
        location: '',
        email: '',
        designation: ''
      }}

      validationSchema={yup.object({
        name: yup.string(20, "name should not exceed 20 character").required("this is requied value"),
        location: yup.string().required("this is requied value"),
        email: yup.string(20, "name should not exceed 20 character").email("invalid emai").required("this is requied value"),
      })}


      onSubmit={values => {
        alert(JSON.stringify(values))
      }}>

      {
        props => (
          <div>
            <h2>New Employee Form</h2>
            <Form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <Field name="name" type="text"></Field>
                <ErrorMessage name='name'></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Salary</label>
                <Field name="salary" type="text"></Field>
                <ErrorMessage name='salary'></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
                <Field name="location" type="text"></Field>
                <ErrorMessage name='location'></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <Field name="email" type="email"></Field>
                <ErrorMessage name='email'></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Designation</label>
                <Field name="designation" as="select">
                  <option values="software-engg">Software Engg.</option>
                  <option values="programmer">Programmer</option>
                  <option values="tester">Tester</option>
                </Field>

              </div>
              <button type='submit' disabled={!props.isValid}>Create</button>
            </Form>
          </div>
        )
      }
    </Formik >
  )
}

const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("application"));