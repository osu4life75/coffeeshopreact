import React from 'react';

export default function Body() {
  return (
    <>
      <div className="card border-secondary mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header">Body Section</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">Secondary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>
  );
}

