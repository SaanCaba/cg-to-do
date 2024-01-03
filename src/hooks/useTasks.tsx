import { useEffect, useState } from 'react';
import { Task } from '../models/task.model';

const useTasks = () => {
  const [currentTasks, setCurrentTasks] = useState<Task[]>([]);

  useEffect(() => {
    const ls = localStorage.getItem('tasks');
    if (ls !== null) {
      const tasksFromLs: Task[] = JSON.parse(ls);
      setCurrentTasks(tasksFromLs);
    }
  }, []);

  function addTask(task: string) {
    const tasksCopy = [...currentTasks];
    console.log(task);
    tasksCopy.push({ name: task, isCompleted: false });
    localStorage.setItem('tasks', JSON.stringify(tasksCopy));

    setCurrentTasks(tasksCopy);
  }

  return { addTask, currentTasks };
};

export default useTasks;
