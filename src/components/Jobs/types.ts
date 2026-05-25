export enum ContractTypeEnum {
  CDI = "CDI",
  CDD = "CDD",
}

export type JobData = {
  id: string;
  title: string;
  contractType: ContractTypeEnum;
  country: string;
  city: string;
};

export type JobsProps = {
  jobs: JobData[];
};

export type JobProps = JobData;
