
import { connect, useDispatch, useSelector } from "react-redux";
function ProfileInfo(props) {

    const state = useSelector(state=>state)
  
console.log(state.profileReducer.form);
    return ( 
        <div className="profileInfo col-9">

        <h1 className="profileInfoHead">Profile Information</h1>
        <div className="profileInfoBody d-flex">
            <img src={`${state.profileReducer.form.imageURL ? state.profileReducer.form.imageURL : "https://yapikurumsal.com.tr/wp-content/uploads/2021/04/avatar-empty.png"}`}  alt={`${state.profileReducer.form.imageURL}`} />
            <div className="profileText">
                <h3>{state.profileReducer.form.firstName} {state.profileReducer.form.lastName}</h3>
                <p>{state.profileReducer.form.email}</p>
                <p>{state.profileReducer.form.biografy}</p>
            </div>
        </div>

        </div>
     );
}

// const mapStateToProps = (state) => ({
//     showForm : state.profileReducer.form
// })

export default ProfileInfo ;