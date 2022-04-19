import React from "react";

import "./index.scss";

export default () => {
  return (
    <div className="panel3">
      <div className="detail">
        <div className="title">Culture & Core Values</div>
        <div className="content">
          <p>
            Our values are at the heart of what we do and we’re all about
            getting the job done whilst having fun with no workplace politics.
            Only with voracious dedication, and excellence, we can build
            something unprecedented and intuitive.
          </p>
          <p>
            Reimagine your career with us because at Developers Studio, we
            believe that “Together we achieve, individually we grow”. We drive
            collaboration, embrace diversity, and respect each other’s
            perspectives. We focus on uplifting employees experiences and are
            committed to foster a diverse and inclusive workplace.
          </p>
        </div>
      </div>
      <div className="items">
        <div className="row">
          <div className="item"><p>Dedication and Commitment</p></div>
          <div className="item"><p>Timely and Consistent</p></div>
          <div className="item"><p>Diversity and Inclusion</p></div>
        </div>
        <div className="row">
          <div className="item"><p>Excellence and Eminence</p></div>
          <div className="item"><p>Integrity and Patience</p></div>
          <div className="item"><p>Flexibility and Ingenuity</p></div>
        </div>
      </div>
    </div>
  );
};
