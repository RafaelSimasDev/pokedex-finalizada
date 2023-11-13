/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import CardPokemon from "../../components/CardPokemon";
import { useContext } from "react";
import { PokeStatsContext } from "../../context/Pokemon_states";
import Loading from "../../components/loading";
import { motion } from "framer-motion";
import Modal from "../../components/Modal";

const Home = () => {
  const { pokeLista, loading, error, pokedex, modal, mensagem, mudaModal } = useContext(PokeStatsContext);
  
  const pokemonFiltrado =
  pokeLista.results  && pokeLista.results.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity: 0}}
      >
        {
          modal && mensagem === 1 &&(
            <Modal 
              mensagem={mensagem}
              fecharModal={mudaModal}
            />
          )
        }
        <ContainerHome>
          <h1>Todos os Pokémons</h1>
          <ul>
            {loading && <Loading />}
            {error && <h1>Houve um erro</h1>}
            {pokeLista.results &&
              pokemonFiltrado.map((item) => (
                <li key={item.name}>
                  <CardPokemon pokemon={item} />
                </li>
              ))}
          </ul>
        </ContainerHome>
      </motion.div>
    </>
  );
};

const ContainerHome = styled.main`
  background-color: #333;
  padding: 60px 40px 0;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  gap: 2px;

  & h1 {
    font-size: 48px;
    font-weight: 700;
    color: #ffff;
  }

  & ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    transition-duration: 400ms;
    overflow: hidden;

    & li {
      width: 440px;
      height: 263px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 30px 5px 0;

    & h1 {
      font-size: 28px;
    }

    & ul {
      & li {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 30px 0px 0;

    & h1 {
      font-size: 28px;
      padding-left: 30px;
    }
  }
`;

export default Home;
