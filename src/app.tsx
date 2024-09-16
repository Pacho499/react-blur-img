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
import { BlurImg, SpinnerProps } from "react-blur-img";
import Input from "./input";
import { useState } from "react";

interface ImgSettings {
  aspectRatio: string;
  objectFit: React.CSSProperties["objectFit"];
  objectPosition: string;
}

const App = () => {
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

  const [spinner, setSpinner] = useState<SpinnerProps>({
    height: 40,
    width: 40,
  });
  const [reload, setReload] = useState<boolean>(false);

  const handleChange = (changeFromChild: string | number, key: string) => {
    if (typeof changeFromChild === "string" && changeFromChild.trim() === "") {
      setSpinner((prev) => ({ ...prev, [key]: undefined }));
    } else {
      setSpinner((prev) => ({ ...prev, [key]: changeFromChild }));
    }
  };

  const reloadImages = () => {
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 500);
  };

  const [imgSettings, setImgSettings] = useState<ImgSettings>({
    aspectRatio: "1/1",
    objectFit: "cover",
    objectPosition: "center",
  });

  console.log(spinner);

  return (
    <div className="container">
      <div className="settings-container">
        <div>
          <h1>React-blur-img Component</h1>
          <h3>Change the settings to watch the differences</h3>
          <span>
            If your internet doesn't allow you to see the animation, open
            Inspect, go to the Network tab, and set a slower Wi-Fi speed.
          </span>
        </div>
        <hr />
        <div>
          <h2>Image settings</h2>
          <div className="input-container">
            <label htmlFor="object-position">
              Select aspect ratio:
              <select
                id="aspect-ratio"
                name="aspect-ratio"
                onChange={(e) =>
                  setImgSettings((prev) => ({
                    ...prev,
                    aspectRatio: e.target.value,
                  }))
                }
              >
                <option value="1/1">1:1</option>
                <option value="16/9">16:9</option>
                <option value="4/3">4:3</option>
                <option value="3/2">3:2</option>
                <option value="auto">Auto</option>
              </select>
            </label>
            <label htmlFor="object-position">
              Select object fit:
              <select
                id="object-fit"
                name="object-fit"
                onChange={(e) =>
                  setImgSettings((prev) => ({
                    ...prev,
                    objectFit: e.target
                      .value as React.CSSProperties["objectFit"],
                  }))
                }
              >
                <option value="cover">Cover</option>
                <option value="fill">Fill</option>
                <option value="none">None</option>
              </select>
            </label>
            <label htmlFor="object-position">
              Select object position:
              <select
                id="object-position"
                name="object-position"
                onChange={(e) =>
                  setImgSettings((prev) => ({
                    ...prev,
                    objectPosition: e.target.value,
                  }))
                }
              >
                <option value="center">Center</option>
                <option value="top left">Top Left</option>
                <option value="top center">Top Center</option>
                <option value="top right">Top Right</option>
                <option value="middle left">Middle Left</option>
                <option value="middle center">Middle Center</option>
                <option value="middle right">Middle Right</option>
                <option value="bottom left">Bottom Left</option>
                <option value="bottom center">Bottom Center</option>
                <option value="bottom right">Bottom Right</option>
              </select>
            </label>
          </div>
        </div>
        <hr />
        <div className="spinner-settings-container"></div>
        <h2>Spinner settings</h2>
        <div className="input-container spinner-settings">
          <Input
            initialValue={40}
            type="number"
            text="width"
            handleChange={handleChange}
          />
          <Input
            initialValue={40}
            type="number"
            text="height"
            handleChange={handleChange}
          />
          <label>
            Select a Spinner Style
            <select
              id="border-style"
              name="border-style"
              onChange={(e) =>
                setSpinner((prev) => ({ ...prev, style: e.target.value }))
              }
            >
              <option value="dotted">Dotted</option>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
              <option value="none">None</option>
              <option value="hidden">Hidden</option>
            </select>
          </label>
          <Input
            type="text"
            text="color"
            handleChange={handleChange}
            placeHolder="eg. white or rgb(122,122,122)"
          />
          <Input
            type="text"
            text="border"
            handleChange={handleChange}
            placeHolder="eg. 4px solid white"
          />
          <Input
            type="text"
            text="borderTop"
            handleChange={handleChange}
            placeHolder="eg. 4px solid white"
          />
        </div>
        <button onClick={() => reloadImages()}>reload</button>
      </div>
      <div className="images">
        {!reload &&
          images.map((image, key) => (
            <BlurImg
              key={key}
              img={image.img}
              placeHolder={image.imgSm}
              alt={`img-${key}`}
              spinner={spinner}
              aspectRatio={imgSettings.aspectRatio}
              objectFit={imgSettings.objectFit}
              objectPosition={imgSettings.objectPosition}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
