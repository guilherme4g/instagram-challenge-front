import { useState } from "react";
import {  Redirect } from "react-router-dom";

import api from "../../api/api";

import './Home.css';

function Home(props) {

  const [token, setToken] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeInput = (value) => {
    setToken(value);
  }

  const handleError = (message) => {
    setErrorMessage(message);
      setError(true);
      setTimeout(() => {
        setErrorMessage("");
        setError(false);
        setLoading(false);
      }, 5000);
  }

  const onClickButton = () => {
    setLoading(true);
    if (token.trim() === "") {
      handleError("O campo para inserir o token está vazio");
      setLoading(false);
      return
    }

    api.get('/user/data/instagram', {
      params: {
        token: token
      }
    }).then(res => {
      setProfile(res.data);
      setLoading(false);
    }).catch(error => {
      handleError("Erro ao utilizar o token, verifique se ele está correto");
      setLoading(false);
    })

    
  }

  if (profile) {
    return ( <Redirect to={{ pathname: "/profile", state: { user: profile } }} /> )
  } else {
    return (
      <div className="home-page-wrapper">
        {
          (loading) ? (
            <div class="ui segment">
              <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
              <p></p>
            </div>
          ) : null
        }
        {
          (error) ? (
            <div class="ui negative message">
              <i class="close icon"></i>
              <div class="header">
                { errorMessage }
              </div>
            </div>
          ) : null
        }
        <label htmlFor=""> Inserir token: </label>
        <input onChange={e => onChangeInput(e.target.value)} value={token} type="text"/>
        <button onClick={onClickButton}>
          Buscar Dados
        </button>
      </div>
    );
  }
}

export default Home;

