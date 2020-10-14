import React from 'react';
import { Container, Options } from './style';
import book from '../../icons/book.png';
import clock from '../../icons/clock.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Choices(){

    const classes = useStyles();

    return(
        <Container>
            <h1>Convoque o time e<br/> Faça uma reserva!</h1>
            <Options>
                <ul>
                    <li>Quadra</li>
                    <li>Sintético</li>
                    <img src={book} />
                    <li>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Escolha uma data"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                    }}
                            />
                        </form>
                    </li>
                    <img src={clock} />
                    <li>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            label="Escolha um horário"
                            type="time"
                            defaultValue="07:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </form>
                    </li>
                </ul>
                <button>Marcar Jogo</button>
            </Options>
        </Container>
    );
}