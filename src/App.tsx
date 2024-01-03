import { Box, Typography } from '@mui/material';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import useTasks from './hooks/useTasks';
import TaskList from './components/TaskList';
import { colors } from './constants/colors';

function App() {
  const { addTask, currentTasks } = useTasks();
  return (
    <Box
      component='main'
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: '15px'
      }}
    >
      <Typography variant='h2' sx={{ color: colors.coffee }} component='h1'>
        To do List
      </Typography>
      <AddTaskForm addTask={addTask} />
      <TaskList currentTasks={currentTasks} />
    </Box>
  );
}

export default App;
