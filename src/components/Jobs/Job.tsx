import { getContractTypeColor } from "./helpers.ts";
import type { JobProps } from "./types.ts";
import * as S from "./UI.ts";

export const Job = ({ title, contractType, country, city }: JobProps) => {
  return (
    <S.Box color={getContractTypeColor(contractType)}>
      <h2>{title}</h2>
      <p>
        {country} - {city} - {contractType}
      </p>
    </S.Box>
  );
};
