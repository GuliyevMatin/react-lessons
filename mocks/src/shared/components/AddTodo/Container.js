import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

function AddTodoContainer() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
       
          <TextField
            className="w-100 mt-3"
            id="firstName"
           name="firstName"
           label="First Name"
            variant="standard"
            onChange={formik.handleChange}
            defaultValue={formik.values.firstName}
          />

        <div className="form-group">
          <TextField
           id="lastName"
           name="lastName"
            className="w-100 mt-3"
            label="Standard"
            variant="standard"
            onChange={formik.handleChange}
            defaultValue={formik.values.lastName}
          />
        </div>
        <div className="form-group">
          <TextField
            className="w-100 mt-3"
            id="age"
            name="age"
            variant="standard"
            label="Number"
            type="number"
            onChange={formik.handleChange}
            defaultValue={formik.values.age}
          />
        </div>
        <Button
          type="submit"
          className="w-100 mt-3"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default AddTodoContainer;
