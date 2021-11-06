import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(6);
  const [vote, setVote] = useState(new Array(7).fill(0));

  const selectedHandler = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
    console.log(randomNumber);
  };

  const voteHandler = () => {
    const newVotes = [...vote];
    newVotes[selected] += 1;
    setVote(newVotes);
  };

  const highestVote = Math.max(...vote);
  const winnerIndex = vote.indexOf(highestVote);
  const winner = anecdotes[winnerIndex];

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={selectedHandler}>Next Anecdote</button>
      <button onClick={voteHandler}>Vote</button>
      <h2>Anecdote with the most votes</h2>
      {highestVote === 0 ? (
        <p>No votes yet</p>
      ) : (
        <p>
          {winner}
          <br />
          has {highestVote} votes.
        </p>
      )}
    </div>
  );
};

export default App;
