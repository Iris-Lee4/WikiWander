import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [page, setPage] = useState({});

  useEffect(() => {
    if(page !== null) {
      setPage(page)
      console.log("i did it")
    }
  }, [page])

  const showPage = async () => {

    try{
      const url = "https://en.wikipedia.org/w/api.php"

      const params = new URLSearchParams({
        action: 'parse',
        prop: 'text',
        origin: "*",
        format: "json",
        page: 'cats'
      })

      const res = await fetch(`${url}?${params}`)
      .then((res) => res.json())
      setPage(res);
      console.log(res);
      console.log(Object.keys(page.parse.text)[0]);
      console.log(page.parse.text[Object.keys(page.parse.text)[0]])

    } catch(e) {
      console.error(e)
    }
  }
  
  return (
    <>
      <h1>Wiki Wander</h1>
      <button
      onClick={showPage}
      >
        push for cats
      </button>
      <div>
      {page.parse.text[Object.keys(page.parse.text)[0]]}

        {page?.parse?.title}
      </div>

    </>
  )
}

export default App

  // const searchWiki = async () => {
  //   try {
  //     const url = "https://en.wikipedia.org/w/api.php"

  //     const params = new URLSearchParams({
  //       action: 'query',
  //       list: 'search',
  //       srsearch: query,
  //       format: 'json',
  //       origin: "*"
  //     })
      
  //   const res = await fetch(`${url}?${params}`)
  //               .then((res) => res.json())

  //       console.log(res)
  //     if(res?.query?.search[0]?.title) {
  //       console.log(res)
  //       setPages(res?.query?.search)
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   } 
  // }

        
      {/* <input placeholder='Search...' value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
      <button
      onClick={searchWiki}
      >Search</button> */}

      {/* <div>
      {pages?.map((page, idx) => (
        <div
        key={page.id}>
        <p
        >
        {page?.title}
        </p>
        <button onClick={showPage(page)}>
          show page
        </button>
        </div>
      ))}

</div> */}

// const [query, setQuery] = useState('');
// const [pages, setPages] = useState([]);