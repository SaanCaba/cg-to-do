import { Paper, Typography } from '@mui/material';
import { colors } from '../../../constants/colors';

interface Props {
  name: string;
  isCompleted: boolean;
}

function TaskItem({ name, isCompleted }: Props) {
  return (
    <Paper
      elevation={3}
      sx={{ width: '95%', background: colors.coffee, color: 'white' }}
    >
      <Typography
        sx={{
          padding: '5px'
        }}
        variant='h6'
      >
        {name}
      </Typography>
    </Paper>
  );
}

export default TaskItem;
