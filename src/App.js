import useFormulario from './hooks/useFormulario';
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'
import { useState } from 'react';

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange,reset] = useFormulario({ name: '', lastname: '', email: '' })
  
  const submit = e =>{
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset()
  }

  // console.log(formulario,usuarios)

  return (
    <div style={{ marginTop: '15%'}}>
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            {/* <input
            name='name'
            placeholder='Nombre'
            value={formulario.name}
            onChange={handleChange}
          /> */}
            <Input
              label="Nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeholder='Nombre'
            />

            <Input
              label="Apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
              placeholder='Apellido'
            />

            <Input
              label="Correo"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder='Correo'
            />

            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map(x => 
            <li key={x.name}>{`${x.name} ${x.lastname}: ${x.email}`}</li>)}
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
