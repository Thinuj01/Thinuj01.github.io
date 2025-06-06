import { type ReactNode } from "react";
import "../styling/NavLinkComp.css";

interface Props {
  children: ReactNode;
  name: string;
  currentContent: string;
  handleContentChange: (newContent: string) => void;
}

const NavLinkComp = ({
  children,
  currentContent,
  name,
  handleContentChange,
}: Props) => {
  return (
    <div
      className={
        currentContent === name
          ? "NavLinkCompContanier NavLinkActive"
          : "NavLinkCompContanier NavLinkDeactive"
      }
      onClick={() => {
        handleContentChange(name);
      }}
    >
      {children}
      <div
        className={currentContent === name ? "textNameShow" : "textNameHide"}
      >
        {name}
      </div>
    </div>
  );
};

export default NavLinkComp;
