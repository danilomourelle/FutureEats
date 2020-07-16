import React from 'react';
import styled from 'styled-components';
import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Wrapper = styled.div`
  width:100%;
  padding:0 16px;
`;
const TextFieldStyled = styled(TextField)`
  border-radius:2px;
  text-transform: none;
  font-size:16px;
  letter-spacing: -0.39px;
  margin: 8px 0;
  & .MuiOutlinedInput-root{
    border-radius:2px;
  }
`;
const OutlinedInputStyled = styled(OutlinedInput)`
  border-radius:2px;
  font-size:16px;
  margin: 8px 0;
`;

export function MyInput({ pattern, title, ...rest }) {
  return (
    <Wrapper>
      <TextFieldStyled
        variant="outlined"
        fullWidth
        inputProps={{
          pattern,
          title,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        {...rest}
      />
    </Wrapper>
  );
}

export function MyPasswordInput({id, label, error, showHelper, ...rest}) {
  const [values, setValues] = React.useState({
    amount: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <FormControl required variant="outlined" fullWidth error={error}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <OutlinedInputStyled
          id={id}
          type={values.showPassword ? 'text' : 'password'}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )}
          labelWidth={70}
          {...rest}
        />
        {showHelper && <FormHelperText>Deve ser a mesma que a anterior.</FormHelperText>}
      </FormControl>
    </Wrapper>
  );
}
