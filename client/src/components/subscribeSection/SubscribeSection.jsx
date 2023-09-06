import "./Subscription.css";
import bg from "../../images/black-bg/sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg";

export default function SubscribeSection() {
  return (
    <div className="container-fluid pt-3 pb-5">
      <div className="container p-0 mx-auto subscriptionImg">
        <img
          src={bg}
          alt=""
          className="img-fluid h-100 w-100 rounded aboutImg"
        />
      </div>
    </div>
  );
}
