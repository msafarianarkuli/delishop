import React, {ReactNode, useEffect, useState} from "react";
import {Modal, ModalProps} from "antd";
import styles from "components/customModal/customModal.module.scss";
import classNames from "classnames";

interface ICustomModal extends ModalProps {
  header?: ReactNode;
  body?: ReactNode;
  classNameBody?: string;
  classNameHeader?: string;
}

function CustomModal(props: ICustomModal) {
  const {header, body, classNameHeader = "", classNameBody = "", ...rest} = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const headerClassName = classNames({
    "flex items-center bg-[#2C3036] text-white px-[15px] h-[60px]": true,
    [classNameHeader]: classNameHeader,
  });
  const bodyClassName = classNames({
    "p-[15px] overflow-auto": true,
    [classNameBody]: classNameBody,
  });

  if (!isClient) return null;
  return (
    <>
      <Modal
        width={390}
        centered
        {...rest}
        modalRender={(node) => {
          return (
            <div className={styles.modal__container}>
              {header ? <div className={headerClassName}>{header}</div> : null}
              {body ? <div className={bodyClassName}>{body}</div> : null}
            </div>
          );
        }}
      />
    </>
  );
}

export default CustomModal;
