import { FunctionComponent, PropsWithChildren, useState } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick: () => void;
  selected: boolean;
  children: string;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
 onClick,
 selected,
  children,
}) => {

  return (
    <button
      type="button"
      className={selected ? classNames("px-2 py-1 border border-black bg-black text-white rounded-md text-lg") : classNames("px-2 py-1 border border-black rounded-md text-md")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
