import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

const ValidatedEmployee = (empData) => {
  const errors = {

  }
  if (!empData.name) {
    errors.name = "Please Enter the name";
  }
  else if (empData.name.length > 20) {
    errors.name = "Employee name should not exceed 20 character";
  }

  if (!empData.location) {
    errors.location = "Please Enter the location";

  }
  if (!empData.email) {
    errors.email = "Please Enter employee  email.";
  }
  else if (! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {

    errors.email = "Invalid Email";
  }
  return errors;
}

const EmployeeComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      salary: '',
      location: '',
      email: '',
    },
    validate: ValidatedEmployee,
    onSubmit: values => {
      alert(JSON.stringify(values))
    }

  })

  //Validation Rules
  return (
    <div className='container p-4'>
      <div className='row mb-4'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5>Create New Employee</h5>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor='name'>Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />



                  {formik.touched.name && formik.errors.name ? <div class="invalid-feedback d-flex">{formik.errors.name}</div> : null}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor='email'>Email</label>
                  <input type="text" className="form-control" name="email" id="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>

                  {formik.touched.email && formik.errors.email ? <div class="invalid-feedback d-flex">{formik.errors.email}</div> : null}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor='location'>Location</label>
                  <input type="text" className="form-control" name="location" id="location" placeholder="location" value={formik.values.location} onChange={formik.handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor=' q'>Salary</label>
                  <input type="number" className="form-control" name="salary" id="salary" placeholder="salary" value={formik.values.salary} onChange={formik.handleChange} />
                </div>
                <button className='btn btn-info'>
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("application"));