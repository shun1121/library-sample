import React, { ReactNode } from "react";
import "./Footer.css";

interface FooterProp {
  copyright?: string;
  classNames?: string;
  children: ReactNode;
}

const Footer = (props: FooterProp) => {
  return (
    <div className="footer-wrap">
      <div>{props.children}</div>
      <div className="footer-copyright">{props.copyright}</div>
    </div>
  );
};

export default Footer;
export type { FooterProp };
