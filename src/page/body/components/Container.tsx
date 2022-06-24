/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Container = ({children}:any) => {
  return (
    <div
      css={css`
        max-width: 1400px;
        height: 100vh;
        margin:0 auto;
        padding: 0 20px;
      `}
    >
    {children}
    </div>
  );
};
