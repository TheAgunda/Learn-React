import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

const EmployeeComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      salary: '',
      location: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
    }

  })
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
                  <input type="text" className="form-control" name="name" id="name" placeholder="name" value={formik.values.name} onChange={formik.handleChange} />
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