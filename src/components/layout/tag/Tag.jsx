import "./Tag.css";
export function Tag() {
  return (
    <>
      <div className="tag-container">
        <img className="tag-img" src="/img/logo.png" alt="" />
        <div className="tag-info">
          <div className="tag-info__title">GRC Solutions</div>
          <div className="tag-info__text">Training Portal</div>
        </div>
        <img className="arrow-icon" src="/img/arrow-icon.png" alt="" />
      </div>
    </>
  );
}
