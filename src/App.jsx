import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container, styled } from "@mui/system";
import { useState } from "react";
import DeleteIcon from "./assets/delete.svg";
import EditIcon from "./assets/edit.svg";
import "./styles.css";

const StyledTextField = styled(TextField)`
  & input {
    color: white;
  }
  & label {
    color: white;
  }
  & label.Mui-focused {
    color: white;
  }
  & label.Mui-focused:after {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState({
    nome: "",
  });
  const [tarefaEditar, setTarefaEditar] = useState(
  [{nome: ""}]);

  function removerTarefa(index) {
    const tempTarefas = [...tarefas];

    tempTarefas.splice(index, 1);

    setTarefas([...tempTarefas]);
  }

  function adicionarTarefa() {
    if (tarefa.nome === "") {
      alert("O nome da tarefa não pode ser vazio!");
      return;
    }
    if (tarefas.length <= 5) {
      setTarefas([...tarefas, { tarefa: tarefa.nome }]);
      setTarefa({ nome: "" });
    } else {
      alert("O número permitido de tarefas é 6!");
    }
  }

  function editarTarefa(index) {
    const novasTarefas = tarefas.slice();
    novasTarefas[index] = { tarefa: tarefaEditar[index].nome, editar: false };
    setTarefas(novasTarefas);

    const arr = tarefaEditar.slice();
    arr[index] = {}
    setTarefaEditar(arr)
    
    
  }

  return (
    <Container>
      <Grid container>
        <Grid
          item
          justifyContent={"center"}
          display={"flex"}
          mx={"auto"}
          py={3}
          xs={8}
        >
          <div className="card">
            <Grid container>
              <Grid item xs={12}>
                <Typography mt={3} align="center" color="white" variant="h5">
                  Lista de tarefas
                </Typography>
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent={"center"}
                flexDirection={{
                  sm: "row",
                  xs: "column",
                }}
                mt={3}
                xs={12}
                px={{ sm: 8, xs: 2 }}
              >
                <StyledTextField
                  sx={{ width: { sm: "60%", xs: "100%" } }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={tarefa.nome ? tarefa.nome : ""}
                  onChange={(e) => {
                    setTarefa({
                      nome: e.target.value
                        .replaceAll(/^ {1,}/g, "")
                        .replaceAll(/ {2,}$/g, " ")
                        .replaceAll(/ {2,}/g, " "),
                    });
                  }}
                  color="secondary"
                  size="small"
                  label="Adiciona uma nova tarefa"
                />

                <Button
                  sx={{
                    height: { sm: "100%" },
                    width: { sm: "40%", xs: "100%" },
                  }}
                  color="secondary"
                  variant="contained"
                  onClick={() => adicionarTarefa()}
                >
                  Adicionar
                </Button>
              </Grid>
              <Grid item display="flex" mt={1} px={{ sm: 8 }} xs={12}>
                <List sx={{ width: "100%" }}>
                  {tarefas.map((tarefa, index) => (
                    <ListItem>
                      <Grid container>
                        <Grid item xs={12}>
                          <Stack
                            sx={{ width: "100%" }}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexDirection={"row"}
                          >
                            <Typography color={"white"}>
                              {tarefa.tarefa}
                            </Typography>
                            <Box>
                              <IconButton
                                onClick={() => {
                                  const novasTarefas = tarefas.slice();
                                  novasTarefas[index] = {
                                    ...tarefa,
                                    editar: !tarefa.editar,
                                  };
                                  setTarefas(novasTarefas);
                                }}
                              >
                                <img src={EditIcon} />
                              </IconButton>
                              <IconButton onClick={() => removerTarefa(index)}>
                                <img src={DeleteIcon} />
                              </IconButton>
                            </Box>
                          </Stack>
                        </Grid>
                        {tarefa.editar && (
                          <Grid item xs={12}>
                            <StyledTextField
                              sx={{ width: { sm: "60%", xs: "100%" } }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              value={tarefaEditar[index] ? 
                                tarefaEditar[index].nome : ""}
                              onChange={(e) => {
                                
                                const arr = tarefaEditar.splice();
                                arr[index] =  {nome: e.target.value
                                  .replaceAll(/^ {1,}/g, "")
                                  .replaceAll(/ {2,}$/g, " ")
                                  .replaceAll(/ {2,}/g, " ")}
                                  setTarefaEditar(arr);
                                // setTarefaEditar([...tarefaEditar,
                                  
                                //   {
                                    
                                //     nome: e.target.value
                                //     .replaceAll(/^ {1,}/g, "")
                                //     .replaceAll(/ {2,}$/g, " ")
                                //     .replaceAll(/ {2,}/g, " ")}
                                // ]);
                              }}
                              color="secondary"
                              size="small"
                              label="Editar"
                            />

                            <Button
                              color="secondary"
                              sx={{
                                height: { sm: "100%" },
                                width: { sm: "40%", xs: "100%" },
                              }}
                              variant="contained"
                              onClick={() => editarTarefa(index)}
                            >
                              Editar
                            </Button>
                          </Grid>
                        )}
                      </Grid>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
