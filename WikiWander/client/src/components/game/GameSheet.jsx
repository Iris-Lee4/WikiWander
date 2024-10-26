import { useRef, useEffect } from "react";
import "./Game.css"

export const GameSheet = ({ board, fetchPage, handleGameChange }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if(board){
    let newBoard = board
    //  newBoard = newBoard.replace(/href/g, "name");
    // newBoard = newBoard.replace(/title/g, "name");
    newBoard = newBoard.replace(/href="\/wiki\//g, 'class="gamesheet-clickable" name="');

    myRef.current.innerHTML = newBoard;
    // console.log(newBoard);
    }
  }, [myRef, board]);

  return (
    <div onClick={(e) => 
        {
            // e.preventDefault();
            fetchPage(e.target.name);
            handleGameChange();
    }}>
      <span ref={myRef} />
    </div>
  );
};

