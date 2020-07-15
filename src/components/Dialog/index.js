import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const DialogText = styled.div`
  height: 18px;
  margin-bottom:31px;
  margin-top:43px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5cb646",
    },
    action: {
      disabledBackground: '#aedaa3',
      disabled: '#333'
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiSelect: {
      // Name of the rule
      select: {
        // Some CSS
        marginLeft: "16px",
        width: "232px",
        height: "18px",
      },
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogAddItem(props) {
  const [quantity, setQtde] = React.useState(1);
  const dialog = useSelector(state => state.app.dialog)

  const handleChange = (event) => {
    setQtde(event.target.value);
  };

  const handleClose = () => {
    props.handleDialog(false, null)
  };

  const handleAdd = () => {
    props.setQuantity(quantity)
    handleClose()
  }
  return (
    <Dialog
      open={dialog.status && dialog.productId === props.product.id}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle><DialogText>Selecione a quantidade desejada</DialogText></DialogTitle>
      <DialogContent>
        <ThemeProvider theme={theme}>
          <Select
            value={quantity}
            style={{
              width: "100%",
              height: "56px",
              border: "solid 1px #b8b8b8"
            }}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </ThemeProvider>
      </DialogContent>
      <DialogActions>
        <Button style={{ marginTop: "28px", marginBottom: "28px" }} onClick={handleAdd} color="primary">
          Adicionar ao Carrinho
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialogAddItem