import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { dessert1, dessert2, dessert3 } from '../../../../image/dessert/components';
import '../../../../css/cards.css';

function DessertMenu() {
  return (
    <>
      <Container>
        <div>
          <h2 className='up-text' >Десерти</h2>
          <p className='p-text'>
            Наші десерти - це справжня поєднання солодкості та естетики.
          </p>
          <p className='p-text'>
            Кожен десерт виготовлений з використанням тільки найкращих інгредієнтів та з любов'ю до деталей.
          </p>
          <h3>Найпопулярніші рецепти в категорії "Десерти"</h3>
          <ul>
            <li className='li-top'>
              <strong>Рецепт #1:</strong> Шоколадний торт "Лава" - ніжно рідкий серединка.
            </li>
            <li className='li-top'>
              <strong>Рецепт #2:</strong> Чізкейк з лимонним соусом - легкий та освіжаючий десерт.
            </li>
            <li className='li-top'>
              <strong>Рецепт #3:</strong> Панакота з малиновим кулі - ніжний і ароматний десерт.
            </li>
          </ul>
        </div>

        <Row>
          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={dessert1} />
              <Card.Body>
                <Card.Title>Пончики</Card.Title>
                <Card.Text>

                </Card.Text>
                <Link to="/recipes/Desserts/dessert-recipe1/">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={dessert2} />
              <Card.Body>
                <Card.Title>Еклери</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to="/recipes/Desserts/dessert-recipe2/">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cards" >
              <Card.Img className='cards-img' src={dessert3} />
              <Card.Body>
                <Card.Title>Кекси з яблучним пюре</Card.Title>
                <Card.Text>
                </Card.Text>
                <Link to="/recipes/Desserts/dessert-recipe3/">Переглянути рецепт</Link>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </>
  );
}
export default DessertMenu;