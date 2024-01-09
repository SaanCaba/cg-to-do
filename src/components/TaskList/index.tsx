import { Paper, Typography } from '@mui/material';
import { Task } from '../../models/task.model';
import TaskItem from './TaskItem';
import { colors } from '../../constants/colors';

interface Props {
  currentTasks: Task[];
  completeTask: (index: number, isCompleted: boolean) => void;
  pendingTasks: number;
}

function TaskList({ currentTasks, completeTask, pendingTasks }: Props) {
  return (
    <Paper
      sx={{
        width: {
          xs: '90%',
          xl: '600px'
        },
        minHeight: '400px',
        maxHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '15px',
        paddingY: '15px',
        background: colors.coffee,
        overflowX: 'hidden'
      }}
      elevation={8}
    >
      {currentTasks.length > 0 ? (
        <>
          <Typography
            variant='h5'
            sx={{
              color: 'white',
              width: '95%',
              fontStyle: 'italic'
            }}
          >
            Pending tasks: {pendingTasks}
          </Typography>
          {currentTasks.map(({ name, isCompleted }, i) => {
            return (
              <TaskItem
                key={i}
                name={name}
                isCompleted={isCompleted}
                index={i}
                completeTask={completeTask}
              />
            );
          })}
        </>
      ) : (
        <Typography variant='h4' sx={{ color: 'white' }}>
          There are not tasks yet...
        </Typography>
      )}
    </Paper>
  );
}

export default TaskList;
