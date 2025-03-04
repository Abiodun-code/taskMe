import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AUTHENTICATED_PARAM = {
  Home: undefined,
  All: undefined,
  Today: undefined,
  Scheduled: undefined,
  Completed: undefined,
  Overdue: undefined,
  AddTask: undefined,
}

export enum AUTHENTICATED_PATH {
  Home = "Home",
  All = "All",
  Today = "Today",
  Scheduled = "Scheduled",
  Completed = "Completed",
  Overdue = "Overdue",
  AddTask = "AddTask",
}

export interface AUTHENTICATED_PROPS {
  navigation: NativeStackNavigationProp<AUTHENTICATED_PARAM>;
}