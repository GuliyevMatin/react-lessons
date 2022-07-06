
import { connect } from "react-redux";
function ProfileInfo(props) {
console.log(props);
    return ( 
        <div className="profileInfo col-9">

        <h1 className="profileInfoHead">Profile Information</h1>
        <div className="profileInfoBody d-flex">
            <img src={`${props.showForm.imageURL ? props.showForm.imageURL : "https://yapikurumsal.com.tr/wp-content/uploads/2021/04/avatar-empty.png"}`}  alt={`${props.showForm.imageURL}`} />
            <div className="profileText">
                <h3>{props.showForm.firstName} {props.showForm.lastName}</h3>
                <p>{props.showForm.email}</p>
                <p>{props.showForm.biografy}</p>
            </div>
        </div>

        </div>
     );
}

const mapStateToProps = (state) => ({
    showForm : state.profileReducer.form
})

export default connect(mapStateToProps)(ProfileInfo) ;