import bale from "../../../assets/images/socialMedia/bale.png";
import sorush from "../../../assets/images/socialMedia/sorush.png";
import rubika from "../../../assets/images/socialMedia/rubika.png";
import eita from "../../../assets/images/socialMedia/eita.png";
import SupportAppCard from "./SupportAppCard";

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

const SupportApps = () => {
  return (
    <div className="flex justify-center ">
      <div>
        {apps.map((app) => (
          <SupportAppCard key={app.id} link={app.link} name={app.name} icon={app.icon} />
        ))}
      </div>
    </div>
  );
};

export default SupportApps;
