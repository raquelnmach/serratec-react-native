import axios from 'axios';
import React, { useState } from "react";
import {
    AlertDialog,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    Alert,
    CloseIcon,
    HStack,
    IconButton,
    Text,
    Collapse
} from "native-base"
import { Container } from "../components/Container";
import "react-native-gesture-handler";

const Cadastrar = ({navigation}) => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const [mostrarMensagemErro, setMostrarMensagemErro] = useState(false);
    const cancelRef = React.useRef(null)
  
      const URL = 'https://secret-headland-69654.herokuapp.com/usuario';
  
      const efetuarCadastro = () => {
          axios
              .post(URL, {
                nome,
                email,
                senha,
              })
              .then((response) => {
                if (response.status === 201) {
                  limparCampos();
                  setIsOpenRegister(true);
                  setTimeout(() => {
                    retornarLogin();
                  }, 5000);
                }
              })
              .catch((erro) => {
                console.log(erro);
                setMostrarMensagemErro(true);
              });
      };
    
      const limparCampos = () => {
        setNome("");
        setEmail("");
        setSenha("");
      };
      
      const retornarLogin = () => {
        return navigation.navigate('Login');
  
      }  
    
      return (
        <>
          <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpenRegister}
          onClose={() => setIsOpenRegister(false)}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Aviso:</AlertDialog.Header>
            <AlertDialog.Body>
              Cadastro efetuado com sucesso.
            </AlertDialog.Body>
          </AlertDialog.Content>
          </AlertDialog>
          <Container>
          <Collapse isOpen={mostrarMensagemErro}>
            <Alert w="100%" status={"error"} mt="5">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                  <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text fontSize="md" color="coolGray.800">
                      {"Ocorreu um erro. Por favor, tente novamente."}
                    </Text>
                  </HStack>
                  <IconButton
                    variant="unstyled"
                    icon={<CloseIcon size="3" color="coolGray.600" />}
                    onPress={() => { setMostrarMensagemErro(false) }}
                  />
                </HStack>
              </VStack>
            </Alert>
          </Collapse>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Bem-vindo(a)
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Informe os dados de acesso:
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Nome</FormControl.Label>
                <Input
                  onChangeText={setNome}
                  value={nome}
                />
              </FormControl>
          <FormControl>
            <FormControl.Label>E-mail</FormControl.Label>
                <Input
                  onChangeText={setEmail}
                  value={email}
                  keyboardType="default"
                />
          </FormControl>    
          <FormControl>
            <FormControl.Label>Crie uma senha</FormControl.Label>
                <Input
                  onChangeText={setSenha}
                  value={senha}
                  type="password"
                />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => efetuarCadastro()}>
            Confirmar cadastro
          </Button>
        </VStack>
            </Box>
            </Container>
      </>
      );
  };
  
  export default Cadastrar;
