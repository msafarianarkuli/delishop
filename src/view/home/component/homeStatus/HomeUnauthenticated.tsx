import {Button} from "antd";
import Image from "next/image";
import logo from "../../../../assets/images/logo/logo.png";
import {signIn} from "next-auth/react";
import {useGuest} from "template/context/GuestProvider";

const HomeUnauthenticated = () => {
  const {onInterAsGuest} = useGuest();
  const handleInter = (type: number) => {
    switch (type) {
      case 0:
        signIn(undefined, {
          redirect: true,
          callbackUrl: "/",
        });
        break;

      case 1:
        onInterAsGuest();
        break;
    }
  };
  return (
    <div className="bg-gradient-to-b to-[#2C3036] from-[#575F6B] w-full h-screen flex flex-col justify-end items-center gap-7">
      <Image src={logo.src} alt="دلی شاپ" width={150} height={150} />
      <p className="text-white text-base font-semibold mb-10">به دلی شاپ خوش آمدید.</p>
      <div className="flex flex-col justify-center gap-2 mb-20">
        <Button
          type="primary"
          className="submit-btn rounded-full text-sm w-[200px]"
          size="large"
          onClick={() => handleInter(0)}
        >
          ورود و عضویت
        </Button>
        <Button
          className="bg-gradient-to-r from-[#E5E6EC] to-[#F2F3F6] rounded-full text-sm w-[200px] hover:text-[#2C3036] border-none"
          size="large"
          onClick={() => handleInter(1)}
        >
          ادامه به عنوان مهمان
        </Button>
      </div>
    </div>
  );
};

export default HomeUnauthenticated;
