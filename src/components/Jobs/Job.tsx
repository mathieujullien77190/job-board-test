import type { JobProps } from "./types.ts";
import * as S from "./UI.ts";

export const Job = ({
  title,
  contractType,
  country,
  city,
  color,
}: JobProps) => {
  return (
    <S.Box color={color}>
      <h2>{title}</h2>
      <p>
        {country} - {city} - {contractType}
      </p>
    </S.Box>
  );
};
