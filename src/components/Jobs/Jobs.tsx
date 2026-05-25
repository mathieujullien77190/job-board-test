import { Job } from "./Job.tsx";
import type { JobsProps } from "./types";
import * as S from "./UI.ts";

export const Jobs = ({ jobs }: JobsProps) => {
  return (
    <S.Container>
      {jobs.map((job) => (
        <Job key={job.id} {...job} />
      ))}
    </S.Container>
  );
};
