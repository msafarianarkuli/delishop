import Image from "next/image";
import logo from "../../../../assets/images/logo/logo.png";

const HomeLoading = () => {
  return (
    <div className="bg-gradient-to-b to-[#2C3036] from-[#575F6B] w-full h-screen flex flex-col justify-end items-center gap-7">
      <Image src={logo.src} alt="دلی شاپ" width={150} height={150} />
      <p className="text-white text-base font-semibold mb-10">به دلی شاپ خوش آمدید.</p>
      <div className="h-[168px]"></div>
    </div>
  );
};

export default HomeLoading;
