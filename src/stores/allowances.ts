import { defineStore } from "pinia";
import { reactive } from "vue";

export type AllowanceStoreState = {
  documentDate: Date | undefined;
  allowances: Allowance[];
  selectedAllowance: Allowance | undefined;
  selectedHousingSupport: Allowance | undefined;
  housingSupportValue: number;
};

export type Allowance = {
  countryCode: string;
  countryCurrencyCode: string;
  countryIcon: string;
  countryName: string;
  fixedAllowance: number;
  geographicAllowance: number;
};

export const useAllowancesStore = defineStore("allowances", () => {
  const state = reactive<AllowanceStoreState>({
    documentDate: undefined,
    allowances: [],
    selectedAllowance: undefined,
    selectedHousingSupport: undefined,
    housingSupportValue: 0,
  });

  const setDocumentDate = (documentDate: Date): void => {
    state.documentDate = documentDate;
  };

  const setAllowances = (allowances: Allowance[]): void => {
    state.allowances = allowances;
  };

  const setSelectedAllowance = (selectedAllowance: Allowance): void => {
    state.selectedAllowance = selectedAllowance;
  };

  const setSelectedHousingSupport = (
    selectedHousingSupport: Allowance
  ): void => {
    state.selectedHousingSupport = selectedHousingSupport;
  };

  const setHousingSupportValue = (housingSupport: number): void => {
    state.housingSupportValue = housingSupport;
  };

  return {
    state,
    setDocumentDate,
    setAllowances,
    setSelectedAllowance,
    setSelectedHousingSupport,
    setHousingSupportValue,
  };
});
