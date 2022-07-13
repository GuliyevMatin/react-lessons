import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react"
import { useModals } from '../../hooks/useModal';
import { useFormik } from 'formik';
import SendIcon from '@mui/icons-material/Send';
import { moviesPostApi } from '../../api/movies';
import {useDispatch, useSelector} from "react-redux"
import { setMovie } from '../../store/slice/moviesSlice';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddDataModal() {
  const state = useSelector(state=>state.moviesSlice.movies)
  const dispatch = useDispatch()
  const {open,setOpen} = useModals()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      id:Date.now(),
      Title: '',
      Year: '',
      Poster: '',
    },
    onSubmit: values => {
      moviesPostApi(values).then((data) =>dispatch(setMovie([...state,values])))
    },
  });

  return (
   <>
    <button onClick={handleOpen}>Add</button>
       <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={formik.handleSubmit} className="form">
       <div className="form-group">
       <label htmlFor="Title">Movie Name</label>
       <input
         id="Title"
         name="Title"
         type="text"
         className='form-control'
         onChange={formik.handleChange}
         value={formik.values.Title}
       />
       </div>
       <div className="form-group">
       <label htmlFor="Year">Movie Year </label>
       <input
         id="Year"
         name="Year"
         type="number"
         className='form-control'
         onChange={formik.handleChange}
         value={formik.values.Year}
       />
       </div>
       <div className="form-group">
       <label htmlFor="Poster">Movie Poster</label>
       <input
         id="Poster"
         name="Poster"
         type="text"
         placeholder='http://'
         className='form-control'
         onChange={formik.handleChange}
         value={formik.values.Poster}
       />
       </div>
       <Button sx={{marginTop:"20px",width:"100%"}} type='submit' variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
     </form>
        </Box>
      </Modal> 
      </>
  );
}
