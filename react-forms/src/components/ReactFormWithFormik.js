import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
class ReactFormWithFormik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: true,
    };
  }
  form = {
    fullName: "",
    email: "",
    password: "",
    fileInput: "",
  };

  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={this.onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
            /* and other goodies */
         
          }) => (
            <form onSubmit={handleSubmit}>
              <input
              className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input type="file" name="file" onChange={(e)=>{setFieldValue("img",e.target.files[0])}}/>
              <input
              className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ReactFormWithFormik;
