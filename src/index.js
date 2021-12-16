import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';


const EmployeeComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      salary: '',
      location: '',
      email: '',
    },
    validationSchema: yup.object({
      name:yup.string(20,"name should not exceed 20 character").required("this is requied value"),
      location:yup.string().required("this is requied value"),
      email:yup.string(20,"name should not exceed 20 character").email("invalid emai").required("this is requied value"),
    }),
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
                  <input  name="name" {...formik.getFieldProps('name')} />



                  {formik.touched.name && formik.errors.name ? <div class="invalid-feedback d-flex">{formik.errors.name}</div> : null}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor='email'>Email</label>
                  <input name="email" {...formik.getFieldProps('email')}/>

                  {formik.touched.email && formik.errors.email ? <div class="invalid-feedback d-flex">{formik.errors.email}</div> : null}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor='location'>Location</label>
                  <input  name="location" {...formik.getFieldProps('location')} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor='salary'>Salary</label>
                  <input name="salary" {...formik.getFieldProps('salary')} />
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