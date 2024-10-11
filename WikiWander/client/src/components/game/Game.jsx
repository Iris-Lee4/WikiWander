//loads the Wiki interface for game play

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Col } from "reactstrap";

export const Game = () => {
const [page, setPage] = useState({});
const [gameActivated, setGameActivated] = useState(false);

  // useEffect(() => {
  //   if(page !== null) {
  //     setPage(page)
  //   }
  // }, [page])

  const showPage = async () => {

    try{
      const url = "https://en.wikipedia.org/w/api.php"

      const params = new URLSearchParams({
        action: 'parse',
        prop: 'text',
        origin: "*",
        format: "json",
        page: 'cat'
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
              testing
              place start and end articles here
            </Col>
            <Col>
            {gameActivated === false && (
                <Button
              onClick={showPage}
              >
                push for cats
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