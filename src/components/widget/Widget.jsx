import "./widget.scss";

const Widget = ({ title, number }) => {


  return (
    <div className="widget">
      <div className="card">
        <span className="title">{title}</span>
        <span className="counter">
          {number}
        </span>
      </div>
    </div>
  );
};

export default Widget;
