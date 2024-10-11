//loads the Wiki interface for game play

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Col } from "reactstrap";
import { getAllArticles } from "../../services/articleService.jsx";

export const Game = () => {
const [page, setPage] = useState({});
const [gameActivated, setGameActivated] = useState(false);
const [articles, setArticles] = useState([]);
const [startArticle, setStartArticle] = useState({});
const [endArticle, setEndArticle] = useState({});
const [currentArticle, setCurrentArticle] = useState({});

const getAndShuffleArticles = () => {

  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

   getAllArticles()
    .then(articleArray => {
      shuffle(articleArray)
  setArticles(articleArray)
  return articleArray
  })
};

const setArticlesForGame = () => {
  const firstArticle = articles[0]
  const secondArticle = articles[1]

  setStartArticle(firstArticle);
  setEndArticle(secondArticle);
  };

  // useEffect(() => {
  //   if(page !== null) {
  //     setPage(page)
  //   }
  // }, [page])

  useEffect(() => {
    getAndShuffleArticles()
  },[])
  
  useEffect(() => {
    if (articles) {
      setArticlesForGame();
    }
  }, [articles])

  const showPage = async () => {

    try{
      const url = "https://en.wikipedia.org/w/api.php"

      const params = new URLSearchParams({
        action: 'parse',
        prop: 'text',
        origin: "*",
        format: "json",
        page: `${startArticle.name}`
      })

      const res = await fetch(`${url}?${params}`)
      .then((res) => res.json())
      setPage(res);
      // console.log(res);
      // console.log(Object.keys(page.parse.text)[0]);
      // console.log(page.parse.text[Object.keys(page.parse.text)[0]])
      setGameActivated(true);

    } catch(e) {
      console.error(e)
    }
  }
  
  return (
    <>
      <Container>
      <h1>NEW GAME</h1>
          <Row xs={2}>
            <Col>
              <h3>Start Article</h3>
              <p>{startArticle?.name}</p>
              <h3>End Article</h3>
              <p>{endArticle?.name}</p>
            </Col>
            <Col>
            {/* have button show when game activated and articles are set */}
            {gameActivated === false && (
                <Button
              onClick={showPage}
              >
                Start Game
              </Button>
              )}
              <div
              dangerouslySetInnerHTML={{__html: page?.parse?.text[Object.keys(page.parse.text)[0]]}}
              >
                </div>
              <div>
                {page?.parse?.title}
              </div>
            </Col>
          </Row>

         
      </Container>
    </>
  )
}