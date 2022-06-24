/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Container = ({ children }: any) => {
  return (
    <div
      css={css`
        max-width: 1200px;
        height: auto;
        margin: 50px auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      `}
    >
      {children}
    </div>
  );
};
