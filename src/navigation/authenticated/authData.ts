import { All, Completed, Home, Overdue, Scheduled, Today } from "@/screens/authenticated";
import { AUTHENTICATED_PATH } from "@/types/index";

export const AUTHENTICATED_STACK = [
  {
    id:0,
    name: AUTHENTICATED_PATH.Home,
    screen: Home
  },
  {
    id: 1,
    name: AUTHENTICATED_PATH.All,
    screen: All
  },
  {
    id: 2,
    name: AUTHENTICATED_PATH.Today,
    screen: Today
  },
  {
    id: 3,
    name: AUTHENTICATED_PATH.Scheduled,
    screen: Scheduled
  },
  {
    id: 4,
    name: AUTHENTICATED_PATH.Completed,
    screen: Completed
  },
  {
    id: 5,
    name: AUTHENTICATED_PATH.Overdue,
    screen: Overdue
  }
]