import React from "react";

interface Props {
  iconName: any;
  iconStyle: any;
  iconSize?: any;
  iconColor?: any;
}

export default function RenderIcons({ iconName, iconStyle, iconSize, iconColor }: Props) {
  return (
    <>
      <i className={`ph-${iconStyle} ph-${iconName}`} style={{ fontSize: iconSize, color: iconColor }}></i>
    </>
  );
}
