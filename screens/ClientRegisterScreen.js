import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ClientRegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [birthdateError, setBirthdateError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleRegister = () => {
    let isValid = true;

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !phone || !address || !gender || !birthdate || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      isValid = false;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      isValid = false;
    }

    if (isValid) {
      // Lógica de registro de cliente
      console.log('Cliente registrado:', { name, email, phone, address, gender, birthdate, password });
      Alert.alert('Sucesso', 'Cliente registrado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <TextInput
        style={[styles.input, nameError && styles.inputError]}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        onFocus={() => setNameError(false)}
        onBlur={() => !name && setNameError(true)}
      />
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setEmailError(false)}
        onBlur={() => !email && setEmailError(true)}
      />
      <TextInput
        style={[styles.input, phoneError && styles.inputError]}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        onFocus={() => setPhoneError(false)}
        onBlur={() => !phone && setPhoneError(true)}
      />
      <TextInput
        style={[styles.input, addressError && styles.inputError]}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        onFocus={() => setAddressError(false)}
        onBlur={() => !address && setAddressError(true)}
      />
      <TextInput
        style={[styles.input, genderError && styles.inputError]}
        placeholder="Sexo"
        value={gender}
        onChangeText={setGender}
        onFocus={() => setGenderError(false)}
        onBlur={() => !gender && setGenderError(true)}
      />
      <TextInput
        style={[styles.input, birthdateError && styles.inputError]}
        placeholder="Data de Nascimento"
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="numeric"
        onFocus={() => setBirthdateError(false)}
        onBlur={() => !birthdate && setBirthdateError(true)}
      />
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setPasswordError(false)}
        onBlur={() => !password && setPasswordError(true)}
      />
      <TextInput
        style={[styles.input, confirmPasswordError && styles.inputError]}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        onFocus={() => setConfirmPasswordError(false)}
        onBlur={() => !confirmPassword && setConfirmPasswordError(true)}
      />
      <Button title="Registrar Cliente" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 18,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default ClientRegisterScreen;