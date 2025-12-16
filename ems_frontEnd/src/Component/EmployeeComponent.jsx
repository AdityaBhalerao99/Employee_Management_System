import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../assets/Service/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const { id } = useParams();



  //We have used a state hook to initialize the variable that holds the validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
      }).catch(error => {
        console.log(error);
      })
    }
  }, [id])


  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    //validating the form
    if (validateForm()) {

      const employee = { firstName, lastName, email }
      console.log(employee)

      //Update logic
      if (id) {
        updateEmployee(id, employee).then((response) => {
            console.log(response.data)
            navigator('/employees')
        }).catch(error => {
              console.log(error);
        })
      }
      else {

        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.log(error);          
        })
      }
    }
  }

  function validateForm() {
    let valid = true;
    // "..." (Three Dot Operator called as Spread Operator) : This is spread operator we use spread operator to copy object into another object
    const errorsCopy = { ...errors }

    //Validation for First Name
    if (firstName.trim()) {
      errorsCopy.firstName = '';
    }
    else {
      errorsCopy.firstName = "First Name is required"
      valid = false
    }

    //Validation for Last Name
    if (lastName.trim()) {
      errorsCopy.lastName = '';
    }
    else {
      errorsCopy.lastName = "Last Name is Required"
      valid = false
    }

    //Validation for Email
    if (email.trim()) {
      errorsCopy.email = '';
    }
    else {
      errorsCopy.email = "Email is required"
      valid = false;
    }

    setErrors(errorsCopy)
    return valid;
  }

  //function to dynamically change the title of the page
  function pageTitle() {
    if (id) {
      return <h1 className='text-center mt-3'>Update Employee</h1>
    }
    else {
      return <h1 className='text-center mt-3'>Add Employee</h1>
    }

  }


  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              pageTitle()
            }
            <div className="card-body">
              <form>
                <div className='form-group mb-2'>
                  <label className="form-label">First Name : </label>
                  <input
                    type='text'
                    placeholder='Enter Employee First Name'
                    name='firstName'
                    value={firstName}
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    onChange={(e) => setFirstName(e.target.value)}>

                  </input>
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className="form-label">Last Name : </label>
                  <input
                    type='text'
                    placeholder='Enter Employee Last Name'
                    name='lastName'
                    value={lastName}
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    onChange={(e) => setLastName(e.target.value)}>

                  </input>
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className="form-label">Email : </label>
                  <input
                    type='text'
                    placeholder='Enter Employee Email'
                    name='email'
                    value={email}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    onChange={(e) => setEmail(e.target.value)}>

                  </input>
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>


              </form>
            </div>

          </div>

        </div></div>
    </div>
  )
}

export default EmployeeComponent
