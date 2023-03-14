import {FormProvider, useForm} from "react-hook-form";
import {createLog} from "utils/utils";
import ProfileInput from "view/profile/component/ProfileInput";
import {Button} from "antd";
import {IconLogoutDark} from "assets/icons";
import useProfileAction from "view/profile/context/useProfileAction";
import {CustomSelectReactHook, DatePickerReactHook} from "components";
import {DayValue} from "@hassanmojab/react-modern-calendar-datepicker";
import {useSession} from "next-auth/react";
import {useEffect} from "react";

interface IProfileForm {
  name: string;
  birthday: DayValue;
  email: string;
  gender: string;
  anniversary: DayValue;
}

const genders = [
  {
    value: "man",
    label: "مرد",
  },
  {
    value: "woman",
    label: "زن",
  },
];

function ProfileForm() {
  const setModal = useProfileAction();
  const methods = useForm<IProfileForm>();
  const {handleSubmit, control, setValue} = methods;
  const {data} = useSession();

  useEffect(() => {
    setValue("name", data?.user.name || "");
    setValue("email", "");
    // setValue("birthday", data?.user.birthday || "");
    // setValue("anniversary", data?.user.anniversary_date || "");
    const gender = genders.find((item) => item.label === data?.user.gender);
    if (gender) {
      setValue("gender", gender.value);
    }
  }, [data?.user.gender, data?.user.name, setValue]);

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
          <DatePickerReactHook
            id="birthday"
            classNameContainer="mb-7"
            control={control}
            inputProps={{label: "تاریخ تولد", placeholder: "1370/5/8"}}
          />
          <ProfileInput
            id="email"
            label="آدرس الکترونیک"
            classNameContainer="mb-7"
            placeholder="m.s.karimi.ubuntu@gmail.com"
            className="dir-ltr"
          />
          {/*<ProfileInput id="gender" label="جنسیت" classNameContainer="mb-7" placeholder="مرد" />*/}
          <CustomSelectReactHook
            id="gender"
            label="جنسیت"
            control={control}
            options={genders}
            placeholder="زن"
            classNameContainer="mb-7"
            className="select-form"
          />
          <DatePickerReactHook
            id="anniversary"
            classNameContainer="mb-7"
            control={control}
            inputProps={{label: "تاریخ سالگرد ازدواج", placeholder: "1390/10/12"}}
          />
          <div className="flex justify-center mb-7 mt-10">
            <Button
              onClick={() => setModal(true)}
              htmlType="button"
              icon={<IconLogoutDark className="w-5 h-5 ml-2" />}
              className="flex items-center secondary-btn text-[15px] px-12"
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
