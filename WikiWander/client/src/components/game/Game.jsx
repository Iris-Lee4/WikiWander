//loads the Wiki interface for game play

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Col } from "reactstrap";
import { getAllArticles } from "../../services/articleService.jsx";
import { GameSheet } from "./gamesheet.jsx";
import { addGame, updateGame } from "../../services/gameService.jsx";

export const Game = ({ currentUser }) => {
const [page, setPage] = useState({});
const [gameActivated, setGameActivated] = useState(false);
const [articles, setArticles] = useState([]);
const [startArticle, setStartArticle] = useState({});
const [endArticle, setEndArticle] = useState({});
const [currentArticle, setCurrentArticle] = useState({});
const [currentBoard, setCurrentBoard] = useState(null);
const [game, setGame] = useState({});
// const [stepCount, setStepCount] = useState('');

//method to shuffle articles so that two random and distinct articles are selected for gameplay
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

//select start and end articles for game
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
    if(articles) {
      setArticlesForGame();
    }
  }, [articles])

  useEffect(() => {
    if(page) {
      setCurrentBoard(page?.parse?.text[Object.keys(page.parse.text)[0]]);
    }
  }, [page])
  
  const newGame = () => {
    const gameObj = {
      userProfileId: currentUser.id,
      startArticleId: startArticle.id,
      endArticleId: endArticle.id,
      stepCount: 0
    }
    
    addGame(gameObj).then((res) => {
      // setGameId(res.id)
      const newGameObj = {
        Id: res.id,
        userProfileId: currentUser.id,
        startArticleId: startArticle.id,
        endArticleId: endArticle.id,
        stepCount: 0
      }

      setGame(newGameObj);
    })

    fetchPage(startArticle.name)
    // setGame(gameObj);
    // setStepCount(gameObj.stepCount);
  }

  const handleGameChange = () => {
    const copy = { ...game }
    copy.stepCount = game.stepCount + 1
    setGame(copy)
    updateGame(copy)
  }

  const fetchPage = async (articleName) => {

    try{
      const url = "https://en.wikipedia.org/w/api.php"

      const params = new URLSearchParams({
        action: 'parse',
        prop: 'text',
        origin: "*",
        format: "json",
        page: `${articleName}`
      })

      const res = await fetch(`${url}?${params}`)
      .then((res) => res.json())
      setPage(res);
      // console.log(res);
      // console.log(Object.keys(page.parse.text)[0]);
      //  console.log(page.parse.text[Object.keys(page.parse.text)[0]])
      // setCurrentBoard(page?.parse?.text[Object.keys(page.parse.text)[0]])
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
              {gameActivated === true && (
                <div>
                <h3># Steps</h3>
                <p>{game.stepCount}</p>
                </div>
               )}
            </Col>
            <Col>
            {/* have button show when game activated and articles are set */}
            {gameActivated === false && (
                <Button
              onClick={() => {
                newGame()
                setGameActivated(true);
              }}
              >
                Start Game
              </Button>
              )}

              {/* to display wiki page */}
              <div>
                <GameSheet board={currentBoard} fetchPage={fetchPage} handleGameChange={handleGameChange} game={game} />
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