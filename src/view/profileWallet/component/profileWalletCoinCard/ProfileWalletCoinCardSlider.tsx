import React from "react";
import ReactSlider from "react-slider";

function ProfileWalletCoinCardSlider() {
  return (
    <>
      <div className="my-5">
        <ReactSlider
          min={0}
          max={100}
          step={1}
          className="coin_slider"
          trackClassName="coin_slider_track"
          onChange={(value) => {
            console.log("value", value);
          }}
          renderThumb={(props) => {
            return (
              <div {...props}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
            );
          }}
        />
      </div>
    </>
  );
}

export default ProfileWalletCoinCardSlider;
