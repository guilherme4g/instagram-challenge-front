import { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";

import api from "../../api/api";

import './Home.css';

function Home(props) {

  const [token, setToken] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    console.log(query.get("code"));
  });

  const onChangeInput = (value) => {
    setToken(value);
  }

  const onClickButton = () => {
    api.get('/user/data/instagram', {
      params: {
        token: token
      }
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="home-page-wrapper">
      <label htmlFor=""> Inserir token: </label>
      <input onChange={e => onChangeInput(e.target.value)} value={token} type="text"/>
      <button onClick={onClickButton}>
        Buscar Dados
      </button>
      {/* <div>
        <a href="https://api.instagram.com/oauth/authorize?client_id=514078809607675&redirect_uri=https://frosty-rosalind-dca014.netlify.app/&scope=user_profile,user_media&response_type=code"> capturar dados </a>
      </div>   */}
    </div>
  );
}

export default Home;
