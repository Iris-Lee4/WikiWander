import { useRef, useEffect } from "react";
import "./GameSheet.css"

export const GameSheet = ({ board, fetchPage }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if(board){
    let newBoard = board
    //  newBoard = newBoard.replace(/href/g, "name");
    // newBoard = newBoard.replace(/title/g, "name");
    newBoard = newBoard.replace(/href="\/wiki\//g, 'class="clickable" name="');

    myRef.current.innerHTML = newBoard;
    // console.log(newBoard);
    }
  }, [myRef, board]);

  return (
    <div onClick={(e) => 
        {
            // e.preventDefault();
            fetchPage(e.target.name);
            //  fetchPage(e.target.name.split("/")[2]);   
    }}>
      <span ref={myRef} />
    </div>
  );
};

