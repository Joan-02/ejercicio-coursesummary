import "./Usercard.css";

export function Usercard() {
  return (
    <>
      <div className="user-card">
        <img
          className="user-info__profile-picture"
          src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="user-info">
          <div className="user-info__details">
            <span className="user-info__name">Aimee Tough</span>
            <span className="user-info__email">aimee.tough@gmail.com</span>
          </div>
          <span className="toggle_container">
            <span className="toggle_switch"></span>
          </span>
        </div>
      </div>
    </>
  );
}
