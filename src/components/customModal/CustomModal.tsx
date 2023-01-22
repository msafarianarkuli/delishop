import React, {ReactNode, useEffect, useState} from "react";
import {Modal, ModalProps} from "antd";
import classNames from "classnames";
import styles from "components/customModal/customModal.module.scss";

interface ICustomModal extends ModalProps {
  header?: ReactNode;
  body?: ReactNode;
  classNameBody?: string;
  classNameHeader?: string;
  classNameContainer?: string;
}

function CustomModal(props: ICustomModal) {
  const {
    header,
    body,
    classNameHeader = "",
    classNameBody = "",
    wrapClassName = "",
    classNameContainer = "",
    ...rest
  } = props;
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

  const classNameWrap = classNames({
    "backdrop-blur-sm": true,
    [wrapClassName]: wrapClassName,
  });

  const containerClassName = classNames({
    [styles.modal_container]: true,
    [classNameContainer]: classNameContainer,
  });

  if (!isClient) return null;
  return (
    <>
      <Modal
        width={390}
        centered
        wrapClassName={classNameWrap}
        {...rest}
        modalRender={() => {
          return (
            <div className={containerClassName}>
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
