import { Formik } from "formik";
import { connect, useDispatch, useSelector } from "react-redux";
import {setWriteForm} from "../../store/actions/profile"
function ProfileForm(props) {

const dispatch = useDispatch()

  return (
    <div className="profileform col-3">
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          biografy: "",
          imageURL: "",
        }}
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
        onSubmit={(values, { setSubmitting,resetForm }) => {
           
          setTimeout(() => {
            dispatch(setWriteForm(values))
       
            setSubmitting(false);
            resetForm()
          }, 400);
        
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form p-3" onSubmit={handleSubmit}>
        
            <div className="form-group mb-2">
                <label htmlFor="">Firstname</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </div>
            {errors.firstName && touched.firstName && errors.firstName}
            <div className="form-group mb-2">
            <label htmlFor="">Lastname</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </div>
            {errors.lastName && touched.lastName && errors.lastName}
            <div className="form-group mb-2">
            <label htmlFor="">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            {errors.email && touched.email && errors.email}
            <div className="form-group mb-2">
            <label htmlFor="">Biografy</label>
              <input
                className="form-control"
                type="text"
                name="biografy"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.biografy}
              />
              
            </div>
            {errors.biografy && touched.biografy && errors.biografy}
            <div className="form-group mb-2">
            <label htmlFor="">Image</label>
              <input
                className="form-control"
                type="text"
                name="imageURL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imageURL}
              />
            </div>
            {errors.imageURL && touched.imageURL && errors.imageURL}
            

            <button type="submit" className="btn btn-primary"disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}


// const mapStateToProps = (state) => ({
//     showForm : state.profileReducer.form
// })


// const mapDispatchToProps = (dispatch) => ({
//     setWriteFormDispatch : (obj)=> dispatch(setWriteForm(obj)),
// })

export default ProfileForm ;
