import React, {ReactNode, useEffect, useState} from "react";
import {Modal, ModalProps} from "antd";
import classNames from "classnames";
import styles from "components/customModal/customModal.module.scss";
import {iranSans} from "assets/fonts/iranSansFont";

interface ICustomModal extends ModalProps {
  header?: ReactNode;
  footer?: ReactNode;
  body?: ReactNode;
  classNameBody?: string;
  classNameHeader?: string;
  classNameFooter?: string;
  classNameContainer?: string;
}

function CustomModal(props: ICustomModal) {
  const {
    header,
    footer,
    body,
    classNameHeader = "",
    classNameBody = "",
    wrapClassName = "",
    classNameContainer = "",
    classNameFooter = "",
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

  const footerClassName = classNames({
    "px-[15px]": true,
    [classNameFooter]: classNameFooter,
  });

  const classNameWrap = classNames({
    "backdrop-blur-sm": true,
    [iranSans.variable]: true,
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
              {footer ? <div className={footerClassName}>{footer}</div> : null}
            </div>
          );
        }}
      />
    </>
  );
}

export default CustomModal;
