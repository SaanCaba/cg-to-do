import { Paper, Typography } from '@mui/material';
import { Task } from '../../models/task.model';
import TaskItem from './TaskItem';
import { colors } from '../../constants/colors';

interface Props {
  currentTasks: Task[];
}

function TaskList({ currentTasks }: Props) {
  return (
    <Paper
      sx={{
        width: '600px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '15px',
        paddingY: '15px',
        background: colors.citron
      }}
      elevation={8}
    >
      {currentTasks.length > 0 ? (
        currentTasks.map(({ name, isCompleted }, i) => {
          return <TaskItem key={i} name={name} isCompleted={isCompleted} />;
        })
      ) : (
        <Typography variant='h4'>There are not tasks yet...</Typography>
      )}
    </Paper>
  );
}

export default TaskList;
