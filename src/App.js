import './App.css';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';



function App() {

  const [codigos, setCodigos] = useState();
  const [titulos, setTitulos] = useState();
  const [autores, setAutores] = useState();
  const [datas, setDatas] = useState();
  const [livros, setLivros] = useState([]);


  function cadastrar() {

    let validacaoCadastro = true
    livros.forEach((livro) => {
      if (livro.codigos == codigos) {
        validacaoCadastro = false
      }
    });

    if (validacaoCadastro) {
      let livro = {
        codigos,
        titulos,
        autores,
        datas
      }

      setLivros([livro, ...livros])
      alert(`Livro cadastrado com sucesso!`)
      limparForm()
    } else {
      alert(`Livro já cadastrado`)
      limparForm()
    }
  }

  function Delete(codigos) {
    livros.forEach((livro, index) => {
      if (livro.codigos == codigos) {
        livros.splice(index, 1)
        setLivros([...livros])
        alert(`Livro excluido com sucesso!`)
      }
    })
  }

  function limparForm() {
    setCodigos('')
    setTitulos('')
    setAutores('')
    setDatas('')
  }



  return (
    <>
      <div className='mb-1'>
        <Nav className="justify-content-center" activeKey="/home">
        </Nav>
        <p className="text-center mt-4 mb-3"> Livraria de Cadastro </p>
        <Nav className="justify-content-end" activeKey="/home">
        </Nav>
      </div>

      <div className="mb-2" >
        <Button variant="secondary" size="lg">
          📖 Cadastro de Livros

          <div className='form'>
            <Form.Control className='form1' value={codigos} onChange={(e) => { setCodigos(e.target.value) }} type="text" placeholder="Código do Livro:" />
            <Form.Control className='form2' value={titulos} onChange={(e) => { setTitulos(e.target.value) }} type="text" placeholder="Titulo do Livro:" />
            <Form.Control className='form3' value={autores} onChange={(e) => { setAutores(e.target.value) }} type="text" placeholder="Autor do Livro:" />
            <Form.Control className='form3' value={datas} onChange={(e) => { setDatas(e.target.value) }} type="text" placeholder="Data:" />
          </div>



          <Button onClick={cadastrar} variant="light" size="lg">
            Cadastrar
          </Button>


        </Button>
        <div className='mg-2'>
          <Button variant="secondary" size="lg">
            📖 Livros Cadastrados

            <Table variant="light" size="lg">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Titulo </th>
                  <th>Autor </th>
                  <th>Data</th>
                  <th>Ação</th>
                </tr>
              </thead>

              <tbody>
                {
                  livros.map((livro) => {
                    return (
                      <>
                        <tr>
                          <td>{livro.codigos}</td>
                          <td>{livro.titulos}</td>
                          <td>{livro.autores}</td>
                          <td>{livro.datas}</td>
                          <td>
                            <Button onClick={() => { Delete(livro.codigos) }}> X </Button>
                          </td>
                        </tr>

                      </>
                    )
                  })
                }

              </tbody>
            </Table>
          </Button>
        </div>
      </div>






    </>
  );
}

export default App;
