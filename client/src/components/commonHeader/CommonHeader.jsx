import "./CommonHeader.css";

export default function CommonHeader({ menu }) {
  return (
    <div className="commonHeader">
      <h1 className="fw-bold text-light">{menu}</h1>
    </div>
  );
}
