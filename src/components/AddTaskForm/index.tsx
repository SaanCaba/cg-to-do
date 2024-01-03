import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel
} from '@mui/material';
import { useState } from 'react';
import { colors } from '../../constants/colors';

interface Props {
  addTask: (task: string) => void;
}

function AddTaskForm({ addTask }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      setInputError('You must to write a task.');
      return;
    }
    addTask(inputValue);

    setInputValue('');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
    if (inputError.length > 0) {
      setInputError('');
    }
  };

  return (
    <Grid
      container
      sx={{
        width: '600px'
      }}
      component='form'
      onSubmit={(e) => handleSubmit(e)}
    >
      <Grid item xs={8}>
        <FormControl
          sx={{
            width: '90%'
          }}
          error={inputError.length > 0}
          variant='standard'
        >
          <InputLabel
            sx={{
              fontSize: '20px'
            }}
            htmlFor='component-error'
          >
            Task
          </InputLabel>
          <Input
            sx={{
              fontSize: '20px',
              width: '100%'
            }}
            // id='component-error'
            aria-describedby='component-error-text'
            onChange={(e) => handleChange(e)}
            value={inputValue}
          />
          <FormHelperText
            sx={{
              fontSize: '15px'
            }}
            id='component-error-text'
          >
            {inputError.length > 0
              ? inputError
              : 'What task do you have planned?'}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4} sx={{ margin: 'auto' }}>
        <Button
          type='submit'
          sx={{ fontSize: '18px', width: '100%' }}
          variant='contained'
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddTaskForm;
