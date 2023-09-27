import {CustomModal} from "components";
import {IconLogoutLight} from "assets/icons";
import useProfile from "view/profile/context/useProfile";
import useProfileAction from "view/profile/context/useProfileAction";
import {signOut} from "next-auth/react";
import {Button} from "antd";
import {useGuest} from "template/context/GuestProvider";

function ProfileLogoutModalBody() {
  const setModal = useProfileAction();
  const {onRemoveGuest} = useGuest();
  return (
    <>
      <div className="text-center my-5">می خواهید از حساب کاربری خود خارج شوید؟</div>
      <div className="flex items-center">
        <Button
          onClick={() => {
            signOut({
              callbackUrl: "/",
            });
            onRemoveGuest();
          }}
          type="primary"
          className="submit-btn modal-submit-btn w-full ml-5"
        >
          بله
        </Button>
        <Button onClick={() => setModal(false)} className="secondary-btn w-full h-[50px]">
          خیر
        </Button>
      </div>
    </>
  );
}

function ProfileLogoutModal() {
  const open = useProfile();
  const setState = useProfileAction();
  return (
    <>
      <CustomModal
        open={open}
        onCancel={() => setState(false)}
        classNameHeader="justify-center"
        header={
          <>
            <IconLogoutLight className="w-5 h-5 ml-2" />
            <span>خروج از حساب کاربری</span>
          </>
        }
        body={<ProfileLogoutModalBody />}
      />
    </>
  );
}

export default ProfileLogoutModal;
