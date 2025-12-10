import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./index.css";
import Card from "./Card";

function App() {
  const clickedCards = useRef<number[]>([]); //i say: it is an array of numbers

  //done Wait,if that is my data ,it loads once,then why on state?
  //because we will shuffle it on every click, we need to re render
  const [characters, setCharacters] = useState([]);
  //to-do
  const [score, setScore] = useState(0);
  //to-do
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        console.log(data);
      });
  }, []);

  //since function is inside component, it has access to state directly. i dont need to pass a parameter
  function clickHandle(id: number) {
    if (clickedCards.current.includes(id)) {
      setScore(0);
      //empy clicked cards
      clickedCards.current = [];
    } else {
      //shuffle characters
      setScore(score + 1);

      clickedCards.current.push(id);
    }

    console.log(clickedCards.current);

    setCharacters((prevCharacters) => shuffle(prevCharacters));
  }

  //shuffle
  function shuffle(array: any[]) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  //useEffect happens after render, so it has latest state. Otherwise, stale state, and max we be behind by 1.

  useEffect(() => {
    if (score >= maxScore) {
      setMaxScore(score);
    }
  }, [score]);

  return (
    <div className="min-h-screen bg-neutral-900  ">
      <header
        className="text-white flex justify-between  m-0 p-3   border-b border-[#C7C8CA]
z-50"
      >
        {
          //https://ibb.co/TxcG01Wt
        }
        <img
          src="https://i.ibb.co/gMHzQBy0/pngegg.png"
          alt="Assassins-creed-logo"
          className="h-14 w-auto"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold ">Assassin's Creed </h1>
          <p className="italic text-neutral-300">Memory game </p>
        </div>
        <div className="flex font-bol  gap-2">
          <div className="">
            <p className="text-neutral-300">SCORE</p>
            <p>{score}</p>
          </div>
          <div>
            <p className="text-neutral-300">MAX</p>
            <p>{maxScore}</p>
          </div>
        </div>
      </header>
      {
        //main should take full height minus header
        //GRID-IN-FLEX problem: grid children dont take up space nolmaly, flex-1 needs overflow to not visible (and other ways)
      }
      <main
        className="
        flex-1 min-h-0
        grid  gap-2 p-2 
        max-w-6xl mx-auto w-full
        lg:grid-cols-5 lg:grid-rows-2
        md:grid-cols-4 md:grid-rows-3
        sm:grid-cols-2 sm:grid-rows-5
       
        grid-cols-2 overflow-y-auto
       "
      >
        {
          //min-h-0 above
          //characters : all data character:a single object
        }
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            clickProp={clickHandle}
          /> //do i need key?--yes!  needs to know which one is it
        ))}
      </main>
    </div>
  );
}

export default App;
//key learning: we need to pass id and function as props to child component . the child says, i was clicked,now cook with this id. the parent received the id and does the logic

//to do: onclick interactivity(bigger and shadow)✅
//to do: fix height to full viewport height
