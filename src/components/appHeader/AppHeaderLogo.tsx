import Link from "next/link";
import logo from "../../assets/images/logo/logo_2.png";

function AppHeaderLogo() {
  return (
    <Link href="/">
      <img src={logo.src} alt="" />
    </Link>
  );
}

export default AppHeaderLogo;
