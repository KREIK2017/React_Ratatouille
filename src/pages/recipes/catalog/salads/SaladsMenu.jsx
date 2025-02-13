import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { salad1, salad2, salad3 } from '../../../../image/salads/components';
import '../../../../css/cards.css';

function Salads() {
  return (
    <>
      <Container>
        <div>
          <h2 className='up-text' >Салати</h2>
          <p className='p-text'>
            Від легких літніх салатів до ситних варіантів з м'ясом - наш вибір салатів подарує вам багато смакових вражень.
          </p>
          <p className='p-text'>
            Свіжі інгредієнти та оригінальні соуси роблять наші салати ідеальним вибором для будь-якого обіду чи вечері.
          </p>
          <h3>Найпопулярніші рецепти в категорії "Салати"</h3>
          <ul>
            <li className='li-top'>
              <strong>Рецепт #1:</strong> Грецький салат - класика з оливковою заправкою.
            </li>
            <li className='li-top'>
              <strong>Рецепт #2:</strong> Цезар з куркою - ситний та смачний салат.
            </li>
            <li className='li-top'>
              <strong>Рецепт #3:</strong> Салат з руколою та пармезаном - простий і стильний варіант.
            </li>
          </ul>
        </div>

        <Row>

          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={salad1} />
              <Card.Body>
                <Card.Title>Салат з капусти і огірка</Card.Title>
                <Card.Text>

                </Card.Text>
                <Link to="/recipes/Salads/salad-recipe1">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={salad2} />
              <Card.Body>
                <Card.Title>Вінегрет</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to="/recipes/Salads/salad-recipe2">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={salad3} />
              <Card.Body>
                <Card.Title> Шуба з лососем</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to="/recipes/Salads/salad-recipe3">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}
export default Salads;