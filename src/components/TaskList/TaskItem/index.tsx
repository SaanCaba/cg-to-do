import { Checkbox, Paper, Typography } from '@mui/material';
import { colors } from '../../../constants/colors';
import { useState } from 'react';

interface Props {
  name: string;
  isCompleted: boolean;
  index: number;
  completeTask: (index: number, isCompleted: boolean) => void;
}

function TaskItem({ name, isCompleted, index, completeTask }: Props) {
  const [taskIsCompleted, setTaskIsCompleted] = useState(isCompleted);

  const handleComplete = () => {
    setTaskIsCompleted(!taskIsCompleted);

    completeTask(index, !taskIsCompleted);
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: '95%',
        background: colors.citron,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        sx={{
          padding: '5px',
          textDecoration: taskIsCompleted ? 'line-through' : ''
        }}
        variant='h6'
      >
        {name}
      </Typography>

      <Checkbox
        checked={taskIsCompleted}
        onClick={handleComplete}
        color='success'
      />
    </Paper>
  );
}

export default TaskItem;
