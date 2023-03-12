import React, {useState} from "react";
import {Button} from "antd";

function ProfileWalletCoinCardSubmit() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      loading={isLoading}
      onClick={() => setIsLoading(false)}
      type="primary"
      className="submit-btn h-[40px] text-[15px]"
    >
      تبدیل
    </Button>
  );
}

export default ProfileWalletCoinCardSubmit;
