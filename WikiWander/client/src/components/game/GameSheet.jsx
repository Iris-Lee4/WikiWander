import { useRef, useEffect } from "react";

export const GameSheet = ({ board, showPage }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if(board){
    let newboard = board
     newboard = newboard.replace(/href/g, "name");

    myRef.current.innerHTML = newboard;
    }
  }, [myRef, board]);

  return (
    <div onClick={(e) => 
        {
         showPage(e.target.name.split("/")[2])   
    }}>
      <span ref={myRef} />
    </div>
  );
};
