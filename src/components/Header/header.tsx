import type { HeaderProps } from "./types";
import * as S from "./UI.ts";

export const Header = ({ title }: HeaderProps) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};
