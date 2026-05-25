import { ContractTypeEnum } from "./types";

export const getContractTypeColor = (contractType: ContractTypeEnum) => {
  switch (contractType) {
    case ContractTypeEnum.CDI:
      return "green";
    case ContractTypeEnum.CDD:
      return "blue";
    default:
      return "gray";
  }
};
