import {Button} from "antd";
import ReactSlider from "react-slider";
import styles from "view/wallet/component/coinCard/coinCard.module.scss";

function CoinCard() {
  return (
    <div className={styles.coin_card_container}>
      <div>گنجینه</div>
      <div className="text-center text-[30px] font-light my-5">
        <span>{9610}</span>
        <span className="mr-2">سکه</span>
      </div>
      <div>افزایش اعتبار کیف پول از گنجینه</div>
      <div className="my-5">
        <ReactSlider
          min={0}
          max={100}
          step={1}
          className="coin_slider"
          trackClassName="coin_slider_track"
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
      <div className="flex">
        <div className="flex flex-1 justify-center items-center inner_box h-[40px] ml-3">
          <span>{(10000).toLocaleString("en-US")}</span>
          <span className="">+</span>
        </div>
        <Button type="primary" className="submit-btn h-[40px] text-[15px]">
          تبدیل
        </Button>
      </div>
    </div>
  );
}

export default CoinCard;
