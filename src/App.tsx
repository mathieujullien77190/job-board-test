import Header from "./components/Header";
import { Jobs } from "./components/Jobs/Jobs";
import { ContractTypeEnum } from "./components/Jobs/types";
import * as S from "./GlobalStyle";

const App = () => {
  return (
    <>
      <S.Wrapper>
        <Header title="The job board" />
      </S.Wrapper>
      <S.Wrapper>
        <Jobs
          jobs={[
            {
              id: "1",
              title: "Full Time Sales Associate - Sydney Boutique",
              contractType: ContractTypeEnum.CDI,
              country: "Australie",
              city: "Sydney",
            },
            {
              id: "2",
              title: "Agent de Sécurité - Pantin",
              contractType: ContractTypeEnum.CDI,
              country: "France",
              city: "Pantin",
            },
            {
              id: "3",
              title: "Responsable d'Atelier (H/F)",
              contractType: ContractTypeEnum.CDD,
              country: "France",
              city: "Paris",
            },
            {
              id: "4",
              title: "Chef de Projets",
              contractType: ContractTypeEnum.CDD,
              country: "France",
              city: "Paris",
            },
            {
              id: "5",
              title: "Développeur React.js",
              contractType: ContractTypeEnum.CDI,
              country: "France",
              city: "Paris",
            },
            {
              id: "6",
              title: "Sales Associate Stockholm",
              contractType: ContractTypeEnum.CDI,
              country: "Suède",
              city: "Stockholm",
            },
            {
              id: "7",
              title: "Vendeur/se - Crans Montana",
              contractType: ContractTypeEnum.CDI,
              country: "Suisse",
              city: "Crans-Montana",
            },
            {
              id: "8",
              title: "CRM & Data Quality Analyst",
              contractType: ContractTypeEnum.CDI,
              country: "USA",
              city: "New York",
            },
            {
              id: "9",
              title: "Infirmier (H/F)",
              contractType: ContractTypeEnum.CDI,
              country: "France",
              city: "Pantin",
            },
          ]}
        />
      </S.Wrapper>
    </>
  );
};

export default App;
