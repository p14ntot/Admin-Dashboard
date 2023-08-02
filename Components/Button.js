
import '@fortawesome/fontawesome-free/css/all.min.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button className='my-button' onClick={onClick}>
        <div className="icon-user">
          <i className="fa-solid fa-user-plus"></i>
        </div>
        <div className="btn-txt">
          <p className='btn-txt'>Add new user</p>
        </div>
      </button>
    </div>
  );
}

export default Button;