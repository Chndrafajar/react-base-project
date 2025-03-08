import React from "react";

interface Props {
  iconName: any;
  iconStyle?: any;
  iconSize?: any;
  iconColor?: any;
}

export default function RenderIcons({ iconName, iconStyle, iconSize, iconColor }: Props) {
  return (
    <>
      <i
        className={`${iconStyle ? `ph-${iconStyle}` : "ph"} ph-${iconName}`}
        style={{ fontSize: iconSize, color: iconColor }}
      ></i>
    </>
  );
}
