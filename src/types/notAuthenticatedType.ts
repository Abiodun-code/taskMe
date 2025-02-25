import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NOT_AUTHENTICATED_PARAM = {
  Onboarding: undefined;
}

export enum NOT_AUTHENTICATED_PATH {
  Onboarding = 'Onboarding',
}

export interface NOT_AUTHENTICATED_PROPS {
  navigation: NativeStackNavigationProp<NOT_AUTHENTICATED_PARAM>;
}