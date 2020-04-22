import React from "react";
import { PhilipOliverLogo } from "../react/PhilipOliverLogo";

export default {
  title: "Branding",
  component: Logo,
};

const wrap = (children, background) => <div style={{ padding: 30, background }}>{children}</div>;

export const Logo = () =>
  wrap(
    <div>
      <PhilipOliverLogo tint="black" width={300} />
    </div>
  );

  export const Inverted = () =>
  wrap(
    <div>
      <PhilipOliverLogo tint="white" width={300} />
    </div>,
    '#08010E'
  );


export const Flat = () =>
wrap(
  <div>
    <PhilipOliverLogo flat tint="#e2e2e2" width={300} />
  </div>
);
