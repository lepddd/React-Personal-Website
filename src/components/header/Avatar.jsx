import React from "react";
import { useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../../utils/bigheads";
import { styled } from "../../../stitches.config";

const AvatarBox = styled("div", {
  circle: "62px",
  /* Stitches custom properties */
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  background: "#f0f0f0",
  padding: "6px",
  transition: "box-shadow .5s ease-in-out",

  "&:hover": {
    boxShadow:
      "0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05)",
  },
});

export const Avatar = () => {
  const [avatar, setAvatar] = useState({ ...getRandomOptions() });
  useEffect(() => {
    const clear = setInterval(() => {
      setAvatar(getRandomOptions());
    }, 800);

    return () => {
      clearInterval(clear);
    };
  }, []);
  return (
    <AvatarBox>
      <BigHead {...avatar} />
    </AvatarBox>
  );
};
