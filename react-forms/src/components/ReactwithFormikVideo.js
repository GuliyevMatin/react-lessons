import React from "react";
import { Component } from "react";

import {Formik} from "formik";
import * as Yup from "yup";

class ReactwithFormikVideo extends Component {
  render() {
    return (
    <div className="container myForm">
        <div className="left-brand">
            <h1>Magic Form</h1>
            <p>Build forms in React without the tears</p>
        </div>
        <div className="right-brand">
        <Formik
        initialValues={{
            name: '',
            email: '',
            agree: false,
            favoriteColor: '',
        }}
        validationSchema={
            Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string().email("Invalid email address").required("Required"),    
                agree: Yup.boolean().oneOf([true], "Required"), 
                favoriteColor: Yup.string().required("Required").oneOf(['red', 'blue', 'green'], "Required"),
            })
        }
        onSubmit={(values,{resetForm,setSubmitting})=>{
           setTimeout(() => {
               console.log(values);
               resetForm();
               setSubmitting(false);
           }, 400);
        }}
        >
            {
                ({values,errors,handleChange,handleSubmit,dirty,isSubmitting,handleReset,touched,setFieldValue}) => (
                    <form className="w-100 p-2" onSubmit={handleSubmit}>
                        <div className="form-group p-2 mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={values.name} onChange={handleChange} />
                            {errors.name && touched.name && (
                                <div className="text-danger">{errors.name}</div>
                            )}
                        </div>
                     
                        
                        <div className="form-group p-2 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter email" value={values.email} onChange={handleChange} />
                        </div>
                        {errors.email && touched.email && (
                                <div className="text-danger">{errors.email}</div>
                            )}
                      
                        <div className="form-group p-2 mb-3">
                            <label htmlFor="favoriteColor">Favorite Color</label>
                            <select className="form-control" id="favoriteColor" name="favoriteColor" value={values.favoriteColor} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                            </select>
                            {errors.favoriteColor && touched.favoriteColor && (
                                <div className="text-danger">{errors.favoriteColor}</div>
                            )}
                        </div>
                        <div className="form-group p-2 mb-3">
                            
                            <input type="checkbox" className="me-2 form-check-input" id="agree" name="agree" checked={values.agree} onChange={handleChange} />
                            <label htmlFor="agree">I agree </label>
                            {errors.agree && touched.agree && (
                                <div className="text-danger">{errors.agree}</div>
                            )}
                        </div>
                        <input type="file" name="img" onChange={(e)=>{
                            setFieldValue('img',e.target.files[0]);
                        }} />
                        <button type="submit" className="btn btn-primary d-block  mx-auto" disabled={!dirty || isSubmitting}>Submit</button>
                    </form>
                )

            }
        </Formik>
        </div>
    </div>
    )
  }
}


export default ReactwithFormikVideo;