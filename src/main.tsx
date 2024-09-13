import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";
import img7 from "/images/img7.jpg";
import img8 from "/images/img8.jpg";
import img9 from "/images/img9.jpg";
import img10 from "/images/img10.jpg";
import img11 from "/images/img11.jpg";
import img12 from "/images/img12.jpg";
import img1Sm from "/images/img1Sm.jpg";
import img2Sm from "/images/img2Sm.jpg";
import img3Sm from "/images/img3Sm.jpg";
import img4Sm from "/images/img4Sm.jpg";
import img5Sm from "/images/img5Sm.jpg";
import img6Sm from "/images/img6Sm.jpg";
import img7Sm from "/images/img7Sm.jpg";
import img8Sm from "/images/img8Sm.jpg";
import img9Sm from "/images/img9Sm.jpg";
import img10Sm from "/images/img10Sm.jpg";
import img11Sm from "/images/img11Sm.jpg";
import img12Sm from "/images/img12Sm.jpg";

const images = [
  {
    img: img1,
    imgSm: img1Sm,
  },
  {
    img: img2,
    imgSm: img2Sm,
  },
  {
    img: img3,
    imgSm: img3Sm,
  },
  {
    img: img4,
    imgSm: img4Sm,
  },
  {
    img: img5,
    imgSm: img5Sm,
  },
  {
    img: img6,
    imgSm: img6Sm,
  },
  {
    img: img7,
    imgSm: img7Sm,
  },
  {
    img: img8,
    imgSm: img8Sm,
  },
  {
    img: img9,
    imgSm: img9Sm,
  },
  {
    img: img10,
    imgSm: img10Sm,
  },
  {
    img: img11,
    imgSm: img11Sm,
  },
  {
    img: img12,
    imgSm: img12Sm,
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      {images.map((image, key) => (
        <App key={key} img={image.img} imgSm={image.imgSm} alt={`img-${key}`} />
      ))}
    </div>
  </StrictMode>
);
