import React from "react";
import { useParams } from "react-router-dom";

export default function Story() {
  const { id } = useParams();

  return (
    <div>
      <h1>Story Page for ID: {id}</h1>
      {/* Aici poți pune detalii despre povestea cu id-ul respectiv */}
    </div>
  );
}
