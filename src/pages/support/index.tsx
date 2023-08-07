import Image from "next/image";
import {AppHeaderBackBtn} from "components";
import Link from "next/link";
import {useRouter} from "next/router";
import bale from "../../assets/images/socialMedia/bale.png";
import sorush from "../../assets/images/socialMedia/sorush.png";
import rubika from "../../assets/images/socialMedia/rubika.png";
import eita from "../../assets/images/socialMedia/eita.png";

const apps = [
  {
    id: 1,
    link: "https://ble.ir/delishopme",
    icon: bale,
    name: "بله",
  },
  {
    id: 2,
    link: "https://splus.ir/delishopme",
    icon: sorush,
    name: "سروش",
  },
  {
    id: 3,
    link: "https://eitaa.com/delishopme",
    icon: eita,
    name: "ایتا",
  },
  {
    id: 4,
    link: "rubika://r.rubika.ir/delishopme",
    icon: rubika,
    name: "روبیکا",
  },
];

const SupportPage = () => {
  const router = useRouter();
  return (
    <>
      <AppHeaderBackBtn className="absolute p-2" type="black" onClick={() => router.back()} />
      <div className="h-screen flex justify-center items-center">
        <div>
          {apps.map((app) => (
            <Link
              key={app.id}
              href={app.link}
              target="_blank"
              className="flex justify-between items-center my-4 bg-white w-64 px-4 py-4 rounded-lg border border-primary"
            >
              <span>پاسخ گویی در نرم افزار {app.name}</span>
              <Image src={app.icon} alt={app.name} width="30" height="30" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SupportPage;
