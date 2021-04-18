import { useEffect, useState } from "react";
import {  Redirect, useLocation } from "react-router-dom";

import api from "../../api/api";

import './Home.css';

function Home(props) {

  const [token, setToken] = useState('');
  const [profile, setProfile] = useState(null);

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
      setProfile(res.data);
    }).catch(error => {
      console.log(error);
    })
  }

  if (profile) {
    return ( <Redirect to={{ pathname: "/profile", state: { user: profile } }} /> )
  } else {
    return (
      <div className="home-page-wrapper">
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
