import {useState} from "react";
import {Button} from "antd";
import {CustomTextArea} from "components";
import styles from "view/home/home.module.scss";
import {toast} from "react-toastify";
import IconSuccessAlert from "assets/icons/IconSuccessAlert";
import {useRouter} from "next/router";

const RecordDetail = () => {
  const [other, setOther] = useState(false);
  const [record, setRecord] = useState(0);
  const router = useRouter();

  const handleToast = () => {
    toast.success("گزارش شما با موفقیت ثبت شد", {
      icon: <IconSuccessAlert className="" />,
    });
    router.push("/");
  };

  const handleRecord = (record: number) => {
    setRecord(record);
    if (record === 6) {
      setOther(true);
    }
  };

  return (
    <div className="px-4">
      <p className="font-bold my-6">چه مشکلی در آگهی وجود دارد؟</p>
      <div className="text-[13px] text-center">
        <Button
          className={`${styles.home_other_category_box} ${
            record === 1 && "border-primary"
          } pt-4 pb-10 rounded-[10px] mb-4 hover:text-textColor`}
          onClick={() => handleRecord(1)}
        >
          <span className="font-semibold">محتوا با عکس آگهی مشکل دارد </span>
        </Button>
        <Button
          className={`${styles.home_other_category_box} ${
            record === 2 && "border-primary"
          } pt-4 pb-10 rounded-[10px] mb-4 hover:text-textColor`}
          onClick={() => handleRecord(2)}
        >
          <span className="font-semibold">دسته بندی آگهی اشتباه است</span>
        </Button>
        <Button
          className={`${styles.home_other_category_box} ${
            record === 3 && "border-primary"
          } pt-4 pb-10 rounded-[10px] mb-4 hover:text-textColor`}
          onClick={() => handleRecord(3)}
        >
          <span className="font-semibold">مورد آگهی شده موجود نیست</span>
        </Button>
        <Button
          className={`${styles.home_other_category_box} ${
            record === 4 && "border-primary"
          } pt-4 pb-10 rounded-[10px] mb-4 hover:text-textColor`}
          onClick={() => handleRecord(4)}
        >
          <span className="font-semibold">آگهی گذار پاسخگو نیست</span>
        </Button>
        <Button
          className={`${styles.home_other_category_box} ${
            record === 5 && "border-primary"
          } pt-4 pb-10 rounded-[10px] mb-4 hover:text-textColor`}
          onClick={() => handleRecord(5)}
        >
          <span className="font-semibold">آگهی تکراری است</span>
        </Button>
        <Button
          className={`${styles.home_other_category_box} ${
            record === 6 && "border-primary"
          } pt-4 pb-10 rounded-[10px] mb-4 hover:text-textColor`}
          onClick={() => handleRecord(6)}
        >
          <span className="font-semibold">سایر موارد</span>
        </Button>
        {other && (
          <CustomTextArea
            id="other"
            name="other"
            className="inner_box bg-transparent border-none pt-4 px-4 rounded-[20px] mb-10 focus:shadow-inner"
            rows={10}
            placeholder="سایر موارد را برای ما بنویسید"
          />
        )}

        <Button
          loading={false}
          htmlType="submit"
          type="primary"
          className="submit-btn w-full mt-2 mb-5"
          onClick={handleToast}
        >
          ثبت
        </Button>
      </div>
    </div>
  );
};

export default RecordDetail;
