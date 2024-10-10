//loads the Wiki interface for game play

import { useEffect, useState } from "react";

export const Game = () => {
// const [page, setPage] = useState({});

//   useEffect(() => {
//     if(page !== null) {
//       setPage(page)
//       console.log("i did it")
//     }
//   }, [page])

//   const showPage = async () => {

//     try{
//       const url = "https://en.wikipedia.org/w/api.php"

//       const params = new URLSearchParams({
//         action: 'parse',
//         prop: 'text',
//         origin: "*",
//         format: "json",
//         page: 'cat'
//       })

//       const res = await fetch(`${url}?${params}`)
//       .then((res) => res.json())
//       setPage(res);
//       console.log(res);
//       console.log(Object.keys(page.parse.text)[0]);
//       console.log(page.parse.text[Object.keys(page.parse.text)[0]])

//     } catch(e) {
//       console.error(e)
//     }
//   }
  
  return (
    <>
      <h1>Wiki Wander</h1>
      {/* <button
      onClick={showPage}
      >
        push for cats
      </button>
      <div
      dangerouslySetInnerHTML={{__html: page?.parse?.text[Object.keys(page.parse.text)[0]]}}
      >
        </div>
      <div>
        {page?.parse?.title}
      </div> */}
    </>
  )
}