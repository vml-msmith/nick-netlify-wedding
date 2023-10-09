import { useRef, useState, useEffect } from "react";


export default function ShareSuccess() {

  return (
    <div className="share-success">
      <div className="share-success-content">
        <p>Thank you for your photo!</p>
        <p><a href="/share">Share another?</a></p>
      </div>
    </div>
  );
}
