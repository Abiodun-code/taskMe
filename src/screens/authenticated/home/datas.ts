import {Ionicons, AntDesign, SimpleLineIcons} from "@expo/vector-icons"

export const taskList = [
  {
    id: 0,
    taskType: 'All',
    color: '#3498db', // Blue
    iconName: "file-tray-outline",
    iconHome:Ionicons,
    task: [
      { id: 0, title: 'Task 1', description: 'Task 1 description', date: '2021-09-01', time: '12:00', isDone: false },
      { id: 1, title: 'Task 2', description: 'Task 2 description', date: '2021-09-02', time: '13:00', isDone: false },
      { id: 2, title: 'Task 3', description: 'Task 3 description', date: '2021-09-03', time: '14:00', isDone: false }
    ]
  },
  {
    id: 1,
    taskType: 'Today',
    color: '#2ecc71', // Green
    iconName: "calendar-number-outline",
    iconHome: Ionicons,
    task: [
      { id: 0, title: 'Task 1', description: 'Task 1 description', date: '2021-09-01', time: '12:00', isDone: false },
      { id: 1, title: 'Task 2', description: 'Task 2 description', date: '2021-09-02', time: '13:00', isDone: false },
      { id: 2, title: 'Task 3', description: 'Task 3 description', date: '2021-09-03', time: '14:00', isDone: false }
    ]
  },
  {
    id: 2,
    taskType: 'Scheduled',
    color: '#f39c12', // Orange
    iconName: "calendar",
    iconHome: AntDesign,
    task: [
      { id: 0, title: 'Task 1', description: 'Task 1 description', date: '2021-09-01', time: '12:00', isDone: false },
      { id: 1, title: 'Task 2', description: 'Task 2 description', date: '2021-09-02', time: '13:00', isDone: false },
      { id: 2, title: 'Task 3', description: 'Task 3 description', date: '2021-09-03', time: '14:00', isDone: false }
    ]
  },
  {
    id: 3,
    taskType: 'Completed',
    color: '#27ae60', // Dark Green
    iconName: "checkmark-sharp",
    iconHome: Ionicons,
    task: [
      { id: 0, title: 'Task 1', description: 'Task 1 description', date: '2021-09-01', time: '12:00', isDone: true },
      { id: 1, title: 'Task 2', description: 'Task 2 description', date: '2021-09-02', time: '13:00', isDone: true },
      { id: 2, title: 'Task 3', description: 'Task 3 description', date: '2021-09-03', time: '14:00', isDone: true }
    ]
  },
  {
    id: 4,
    taskType: 'Overdue',
    color: '#e74c3c', // Red
    iconName: "flag",
    iconHome: SimpleLineIcons,
    task: [
      { id: 0, title: 'Task 1', description: 'Task 1 description', date: '2021-09-01', time: '12:00', isDone: false },
      { id: 1, title: 'Task 2', description: 'Task 2 description', date: '2021-09-02', time: '13:00', isDone: false },
      { id: 2, title: 'Task 3', description: 'Task 3 description', date: '2021-09-03', time: '14:00', isDone: false }
    ]
  }
];
