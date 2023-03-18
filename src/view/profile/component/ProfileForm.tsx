import {FormProvider, useForm} from "react-hook-form";
import {createLog, number2Digits} from "utils/utils";
import ProfileInput from "view/profile/component/ProfileInput";
import {Button} from "antd";
import {IconLogoutDark} from "assets/icons";
import useProfileAction from "view/profile/context/useProfileAction";
import {CustomSelectReactHook, DatePickerReactHook} from "components";
import {DayValue} from "@hassanmojab/react-modern-calendar-datepicker";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IUpdateProfileRes} from "types/interfaces";

dayjs.extend(jalaliday);

interface IProfileForm {
  name: string;
  birthday?: DayValue;
  // email?: string;
  gender?: string;
  anniversary?: DayValue;
}

interface IBody {
  name: string;
  birthday?: string;
  gender?: string;
  anniversary?: string;
}

const genders = [
  {
    value: "0",
    label: "مرد",
  },
  {
    value: "1",
    label: "زن",
  },
];

function ProfileForm() {
  const setModal = useProfileAction();
  const methods = useForm<IProfileForm>();
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: {isSubmitting},
  } = methods;
  const {data} = useSession();

  useEffect(() => {
    setValue("name", data?.user.name || "");
    if (data?.user.birthday) {
      const day = dayjs(data.user.birthday).calendar("jalali");
      const birthday = {year: day.year(), month: day.month() + 1, day: day.date()};
      setValue("birthday", birthday);
    }
    if (data?.user.anniversary_date) {
      const day = dayjs(data.user.anniversary_date).calendar("jalali");
      const anniversary = {year: day.year(), month: day.month() + 1, day: day.date()};
      setValue("anniversary", anniversary);
    }
    const gender = genders.find((item) => item.label === data?.user.gender);
    if (gender) {
      setValue("gender", gender.value);
    }
  }, [data?.user.anniversary_date, data?.user.birthday, data?.user.gender, data?.user.name, setValue]);

  async function onSubmit(payload: IProfileForm) {
    createLog("payload", payload);
    let birthday = "";
    if (payload.birthday?.year && payload.birthday?.month && payload.birthday?.day) {
      const tmp =
        payload.birthday.year + "-" + number2Digits(payload.birthday.month) + "-" + number2Digits(payload.birthday.day);
      // @ts-ignore
      birthday = dayjs(tmp, {jalali: true}).calendar("gregory").format("YYYY-MM-DD");
    }
    let anniversary = "";
    if (payload.anniversary?.year && payload.anniversary?.month && payload.anniversary?.day) {
      const tmp =
        payload.anniversary.year +
        "-" +
        number2Digits(payload.anniversary.month) +
        "-" +
        number2Digits(payload.anniversary.day);
      // @ts-ignore
      anniversary = dayjs(tmp, {jalali: true}).calendar("gregory").format("YYYY-MM-DD");
    }
    const body: IBody = {
      name: payload.name,
    };
    if (payload.gender) {
      body.gender = payload.gender;
    }
    if (birthday) {
      body.birthday = birthday;
    }
    if (anniversary) {
      body.anniversary = anniversary;
    }
    console.log("body", body);
    try {
      const res = await axiosService<IUpdateProfileRes, IBody>({
        url: API.UPDATE_USER_PROFILE,
        method: "PUT",
        token: data?.user.token || "",
      });
      console.log("res", res);
      const resData = res.data;
      if (resData.name) {
        const resetData: IProfileForm = {
          name: resData.name,
        };
        let updateUrl = API.UPDATE_USER_SESSION + `?name=${encodeURI(resData.name)}`;
        if (resData.gender) {
          updateUrl += `&gender=${encodeURI(resData.gender.toString())}`;
          resetData.gender = resData.gender.toString();
        }
        if (resData.birthday) {
          updateUrl += `&birthday=${encodeURI(resData.birthday)}`;
          const day = dayjs(resData.birthday).calendar("jalali");
          resetData.birthday = {year: day.year(), month: day.month() + 1, day: day.date()};
        }
        if (resData.anniversary_date) {
          updateUrl += `&anniversary=${encodeURI(resData.anniversary_date)}`;
          const day = dayjs(resData.anniversary_date).calendar("jalali");
          resetData.anniversary = {year: day.year(), month: day.month() + 1, day: day.date()};
        }
        const resUpdateSession = await axiosService({url: updateUrl, method: "get"});
        reset(resetData);
        console.log("onSubmit updateProfile resUpdateSession", resUpdateSession);
      }
    } catch (e) {
      console.log("onSubmit updateProfile error", e);
    }
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
              required: "نام و نام خانوادگی خود را وارد کنید",
            }}
          />
          <DatePickerReactHook
            id="birthday"
            classNameContainer="mb-7"
            control={control}
            inputProps={{label: "تاریخ تولد", placeholder: "1370/5/8", disabled: !!data?.user.birthday}}
          />
          {/*<ProfileInput*/}
          {/*  id="email"*/}
          {/*  label="آدرس الکترونیک"*/}
          {/*  classNameContainer="mb-7"*/}
          {/*  placeholder="m.s.karimi.ubuntu@gmail.com"*/}
          {/*  className="dir-ltr"*/}
          {/*/>*/}
          {/*<ProfileInput id="gender" label="جنسیت" classNameContainer="mb-7" placeholder="مرد" />*/}
          <CustomSelectReactHook
            id="gender"
            label="جنسیت"
            control={control}
            options={genders}
            placeholder="زن"
            classNameContainer="mb-7"
            className="select-form"
            disabled={!!data?.user.gender}
          />
          <DatePickerReactHook
            id="anniversary"
            classNameContainer="mb-7"
            control={control}
            inputProps={{
              label: "تاریخ سالگرد ازدواج",
              placeholder: "1390/10/12",
              disabled: !!data?.user.anniversary_date,
            }}
          />
          <div className="flex justify-center mb-7 mt-10">
            <Button
              loading={isSubmitting}
              onClick={() => setModal(true)}
              htmlType="button"
              icon={<IconLogoutDark className="w-5 h-5 ml-2" />}
              className="flex items-center secondary-btn text-[15px] px-12"
            >
              خروج از حساب کاربری
            </Button>
          </div>
          <Button loading={isSubmitting} htmlType="submit" type="primary" className="submit-btn w-full mt-2 mb-5">
            ثبت
          </Button>
        </form>
      </FormProvider>
    </>
  );
}

export default ProfileForm;
