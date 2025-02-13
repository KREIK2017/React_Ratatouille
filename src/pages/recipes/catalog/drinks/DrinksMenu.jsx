import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col, Card } from 'react-bootstrap';
import '../../../../css/cards.css';
import { drink1, drink2, drink3 } from '../../../../image/drinks/components';

function DrinkMenu(){
    return (
      <>
      <Container>
      <div>
    <h2 className='up-text' >Напої</h2>
    <p className='p-text'>
        Наш вибір напоїв пропонує широкий асортимент від класичних коктейлів до освіжаючих фруктових соків.
    </p>
    <p className='p-text'>
        Напої від наших шеф-кухарів - це справжнє мистецтво з поєднання різних смаків та ароматів.
    </p>
    <h3>Найпопулярніші рецепти в категорії "Напої"</h3>
    <ul>
        <li className='li-top'>
            <strong>Рецепт #1:</strong> Мохіто - свіжий і освіжаючий напій з м'ятою та лаймом.
        </li>
        <li className='li-top'>
            <strong>Рецепт #2:</strong> Класичний Мартіні - елегантний та витончений коктейль.
        </li>
        <li className='li-top'>
            <strong>Рецепт #3:</strong> Апельсиновий смузі - освіжаючий та багатий на вітаміни напій.
        </li>
    </ul>
</div>
    <Row>
    <Col>
      <Card className="cards" >
        <Card.Img className='cards-img' src={drink1} />
        <Card.Body>
          <Card.Title>Квас</Card.Title>
          <Card.Text>

          </Card.Text>
          <Link to="/recipes/Drinks/drink-recipe1">Переглянути рецепт</Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="cards" >
        <Card.Img className='cards-img' src={drink2} />
        <Card.Body>
          <Card.Title>Ягідний кисиль</Card.Title>
          <Card.Text>
          </Card.Text>
          <Link to="/recipes/Drinks/drink-recipe2">Переглянути рецепт</Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="cards" >
        <Card.Img className='cards-img' src={drink3} />
        <Card.Body>
          <Card.Title>Яблучний сидр</Card.Title>
          <Card.Text>
          </Card.Text>
          <Link to="/recipes/Drinks/drink-recipe3">Переглянути рецепт</Link>
        </Card.Body>
      </Card>
    </Col>

  </Row>
  </Container>
  </>
    );
}
export default DrinkMenu;