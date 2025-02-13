import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { mainDishes1, mainDishes2, mainDishes3 } from '../../../../image/main-dishes/components';
import '../../../../css/cards.css';

function MainDishesMenu() {
  return (
    <>
      <Container>
        <div>
          <h2 className='up-text' >Головні страви</h2>
          <p className='p-text'>
            Від смачних м'ясних страв до ароматних вегетаріанських страв - наші головні страви розкажуть вам нові історії смаку.
          </p>
          <p className='p-text'>
            Незалежно від вашого смаку чи вибору, ми гарантуємо, що кожна страва приготована з любов'ю та увагою до деталей.
          </p>
          <h3>Найпопулярніші рецепти в категорії "Головні страви"</h3>
          <ul>
            <li className='li-top'>
              <strong>Рецепт #1:</strong> Стейк з соусом бордо - чудовий варіант для цінителів м'яса.
            </li>
            <li className='li-top'>
              <strong>Рецепт #2:</strong> Рататуй - ароматна та корисна вегетаріанська страва.
            </li>
            <li className='li-top'>
              <strong>Рецепт #3:</strong> Лосось з лимонним соусом - ідеальний вибір для любителів риби.
            </li>
          </ul>
        </div>
        <Row>
          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={mainDishes1} />
              <Card.Body>
                <Card.Title>Курячий шашлик з картоплею</Card.Title>
                <Card.Text>

                </Card.Text>
                <Link to="/recipes/MainDishes/maindishes-recipe1">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={mainDishes2} />
              <Card.Body>
                <Card.Title>Рагу</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to="/recipes/MainDishes/maindishes-recipe2">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={mainDishes3} />
              <Card.Body>
                <Card.Title>Пельмені</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to="/recipes/MainDishes/maindishes-recipe3">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </>
  );
}
export default MainDishesMenu;