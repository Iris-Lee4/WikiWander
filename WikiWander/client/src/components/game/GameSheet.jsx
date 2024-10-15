import { useRef, useEffect } from "react";

export const GameSheet = ({ board, fetchPage }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if(board){
    let newBoard = board
     newBoard = newBoard.replace(/href/g, "name");

    myRef.current.innerHTML = newBoard;
    console.log(newBoard);
    }
  }, [myRef, board]);

  return (
    <div onClick={(e) => 
        {
         fetchPage(e.target.name.split("/")[2])   
    }}>
      <span ref={myRef} />
    </div>
  );
};
