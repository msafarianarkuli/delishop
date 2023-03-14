import {CustomDrawer} from "components";
import {IconRoundedLeft, IconRoundedRight} from "assets/icons";
import Link from "next/link";
import styles from "template/template.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDrawerOpen, setIsDrawerOpen} from "redux/template/templateReducer";
import {AppDispatch} from "redux/store";
import {useCallback} from "react";
import {Button} from "antd";
import useDrawerRoutes from "template/hooks/useDrawerRoutes";
import {useSession} from "next-auth/react";

function Drawer() {
  const isDrawerOpen = useSelector(selectIsDrawerOpen);
  const dispatch = useDispatch<AppDispatch>();
  const data = useDrawerRoutes();
  const {data: useData} = useSession();

  const onClose = useCallback(() => {
    dispatch(setIsDrawerOpen(false));
  }, [dispatch]);

  return (
    <CustomDrawer
      placement="right"
      width={320}
      className={`${styles.drawer} text-textColor font-IranSans text-[14px]`}
      rootClassName="z-[10000]"
      open={isDrawerOpen}
      closable={false}
      onClose={onClose}
      bodyStyle={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="px-[19px] pt-[17px]">
        <Button onClick={onClose} className="flex items-center justify-center shadow-none border-0 p-0">
          <IconRoundedRight className="w-7 h-7" />
        </Button>
      </div>
      <div className="flex items-center justify-between mt-[40px] px-[19px] pb-[32px] border-b border-borderColor">
        <div className="font-medium text-[15px]">{useData?.user.name}</div>
        <Link href="/profile" onClick={onClose} className="flex items-center text-primary">
          <div className="font-medium">اطلاعات کاربر</div>
          <IconRoundedLeft className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex flex-col flex-1 overflow-auto">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              className="flex items-center justify-between px-[19px] py-[14px] border-b border-borderColor"
              href={item.link}
              onClick={onClose}
            >
              <div className="flex items-center">
                <Icon className="w-5 h-auto ml-2" />
                <div>{item.title}</div>
              </div>
              <div>
                <IconRoundedLeft className="w-5 h-5" />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className={styles.drawer_gradient} />
      </div>
    </CustomDrawer>
  );
}

export default Drawer;
