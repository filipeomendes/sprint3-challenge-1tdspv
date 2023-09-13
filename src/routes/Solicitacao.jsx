import {React,  useState } from 'react';
import { Link } from 'react-router-dom';

export default function Solicitacao(){
  document.title = 'Solicitacao';

  const [formData, setFormData] = useState({
    modelo: '', carga: '', situacao: '', apolice: '', cep: '', comprimento: '', altura: '', peso: '', obs: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
    if (isFormValid) {
      window.location.href = '/status';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className='solicitacaoo'>
      <section className="titulo">
        <h1>Solicitar Resgate do Veículo</h1>
      </section>
      <section className="secao-form">
        <form onSubmit={handleSubmit} id="form-solicitacao" className="formulario-solicitao">
          <div>
            <label htmlFor="modelo">Modelo do Veículo:</label>
            <input type="text" id="modelo" name="modelo" value={formData.modelo} onChange={handleChange}placeholder="*Modelo do veículo"/>
          </div>
          <div>
            <label htmlFor="carga">Peso da Carga:</label>
            <input type="text" id="carga" name="carga" value={formData.carga} onChange={handleChange} placeholder="*Peso da carga"/>
          </div>
          <div>
            <label htmlFor="situacao">Situação do Resgate:</label>
            <input type="text" id="situacao" name="situacao" value={formData.situacao} onChange={handleChange} placeholder="*Situação do resgate"/>
          </div>
          <div>
            <label htmlFor="apolice">Número da Apólice:</label>
            <input type="text" id="apolice" name="apolice" value={formData.apolice} onChange={handleChange} placeholder="*Número da apólice"/>
          </div>
          <div>
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} placeholder="*CEP" />
          </div>
          <div>
            <label htmlFor="comprimento">Comprimento do Veículo:</label>
            <input type="text" id="comprimento" name="comprimento" value={formData.comprimento} onChange={handleChange} placeholder="*Comprimento do veículo" />
          </div>
          <div>
            <label htmlFor="altura">Altura do Veículo:</label>
            <input type="text" id="altura" name="altura" value={formData.altura} onChange={handleChange} placeholder="*Altura do veículo" />
          </div>
          <div>
            <label htmlFor="peso">Peso do Veículo:</label>
            <input type="text" id="peso" name="peso" value={formData.peso} onChange={handleChange} placeholder="*Peso do veículo" />
          </div>
          <div>
            <label htmlFor="obs">Observações:</label>
            <input type="text" id="obs" name="obs" value={formData.obs} onChange={handleChange} placeholder="*Observações" />
          </div>
          <div>
            <Link to="/maps">
              <button className="botao-voltar">Voltar</button>
            </Link>
          </div>
          <div>
            <button type="submit" className="botao-seguinte">Solicitar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
