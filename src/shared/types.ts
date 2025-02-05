export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type TranslationKey =
  | "facilities"
  | "facilitiesDescription"
  | "classes"
  | "classesDescription"
  | "trainers"
  | "trainersDescription"
  | "ourClassesName1"
  | "ourClassesDescription1"
  | "ourClassesName2"
  | "ourClassesDescription2"
  | "ourClassesName3"
  | "ourClassesDescription3"
  | "ourClassesName4"
  | "ourClassesDescription4"
  | "ourClassesName5"
  | "ourClassesDescription5"
  | "ourClassesName6"
  | "ourClassesDescription6";
  

export type BenefitType = {
  icon: JSX.Element;
  title: TranslationKey;
  description: TranslationKey;
};

export interface ClassType {
  name: TranslationKey;
  description: TranslationKey;
  image: string;
}
