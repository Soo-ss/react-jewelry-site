import React from "react";

function EventLeft(props) {
  return (
    <div className="post-blog wow fadeInUp" data-wow-delay="0.4s">
      <div className="holder">
        <div className="img-holder">
          <a href="/">
            <img src={props.bg} alt="image description" />
          </a>
        </div>
        <div className="text-wrap">
          <h2 className="blog-heading">
            <a href="/">{props.title}</a>
          </h2>
          <p>{props.desc}</p>
          <a className="btn-more" href="/">
            Continue <i className="icon-right-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventLeft;
