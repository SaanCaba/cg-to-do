import { useEffect, useState } from 'react';
import { Task } from '../models/task.model';

const useTasks = () => {
  const [currentTasks, setCurrentTasks] = useState<Task[]>([]);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    const ls = localStorage.getItem('tasks');
    if (ls !== null) {
      const tasksFromLs: Task[] = JSON.parse(ls);
      setCurrentTasks(tasksFromLs);
      const totalPendingTasks = getPendingTasks(tasksFromLs);
      setPendingTasks(totalPendingTasks);
    }
  }, []);

  function addTask(task: string) {
    const tasksCopy = [...currentTasks];
    tasksCopy.push({ name: task, isCompleted: false });
    localStorage.setItem('tasks', JSON.stringify(tasksCopy));
    setPendingTasks((pendingTasks) => pendingTasks + 1);
    setCurrentTasks(tasksCopy);
  }

  function completeTask(index: number) {
    const updatedTasks = currentTasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    const totalPendingTasks = getPendingTasks(updatedTasks);
    setPendingTasks(totalPendingTasks);
    setCurrentTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function getPendingTasks(tasks: Task[]) {
    let pendingTasks = 0;
    tasks.map((task) => {
      if (!task.isCompleted) {
        pendingTasks++;
      }
    });
    return pendingTasks;
  }

  return { addTask, currentTasks, completeTask, pendingTasks };
};

export default useTasks;
