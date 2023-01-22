import {FormProvider, useForm} from "react-hook-form";
import {createLog} from "utils/utils";
import ProfileInput from "view/profile/component/ProfileInput";
import {Button} from "antd";
import {IconLogout} from "assets/icons";

interface IProfileForm {
  name: string;
  birthday: string;
  email: string;
  gender: string;
  anniversary: string;
}

function ProfileForm() {
  const methods = useForm<IProfileForm>();
  const {handleSubmit} = methods;

  function onSubmit(payload: IProfileForm) {
    createLog("payload", payload);
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileInput
            id="name"
            label="نام و نام خانوادگی"
            classNameContainer="mb-7"
            rules={{
              validate: (value) => {
                if (!value) return "نام و نام خانوادگی خود را وارد کنید";
                return true;
              },
            }}
          />
          <ProfileInput id="birthday" label="تاریخ تولد" classNameContainer="mb-7" placeholder="1370/5/8" />
          <ProfileInput
            id="email"
            label="آدرس الکترونیک"
            classNameContainer="mb-7"
            placeholder="m.s.karimi.ubuntu@gmail.com"
            className="dir-ltr"
          />
          <ProfileInput id="gender" label="جنسیت" classNameContainer="mb-7" placeholder="مرد" />
          <ProfileInput
            id="anniversary"
            label="تاریخ سالگرد ازدواج"
            classNameContainer="mb-7"
            placeholder="1390/10/12"
          />
          <div className="flex justify-center mb-7 mt-10">
            <Button
              htmlType="button"
              icon={<IconLogout className="w-5 h-5 ml-2" />}
              className="flex items-center secondary-btn text-[15px] px-12 h-[50px]"
            >
              خروج از حساب کاربری
            </Button>
          </div>
          <Button htmlType="submit" type="primary" className="submit-btn w-full mt-2 mb-5">
            ثبت
          </Button>
        </form>
      </FormProvider>
    </>
  );
}

export default ProfileForm;
