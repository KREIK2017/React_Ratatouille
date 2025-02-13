// Soups.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col, Card } from 'react-bootstrap';
import { soup1, soup2, soup3 } from '../../../../image/soups/components';
import '../../../../css/cards.css';
function SoupsMenu() {
  return (
    <>
    <Container>
    
      <div>
      <h2 className='up-text' >Супи</h2>
      <p className='p-text'>
        Від гарячих бульйонів до ароматних крем-супів, наші супи - це справжній фестиваль смаків.
      </p>
      <p className='p-text'>
        Незалежно від того, чи ви шукаєте щось зігріваюче в холодну пору року чи освіжаюче влітку,
        наші супи точно вас вразять. Дозвольте собі насолодитися чарівним світом ароматів та неперевершеним смаком.
      </p>
      <h3>Найпопулярніші рецепти в категорії "Супи"</h3>
      <ul>
  <li className='li-top'>
    <strong>Рецепт #1:</strong> Ароматний курячий бульйон - чудовий спосіб розпочати ваш обід.
  </li>
  <li className='li-top'>
    <strong>Рецепт #2:</strong> Грибний крем-суп з трюфелями - розкішний смак грибів та трюфелів в одному.
  </li>
  <li className='li-top'>
    <strong>Рецепт #3:</strong> Чилі з гострим перцем - для любителів пікантного смаку та аромату.
  </li>
</ul>

      </div>
      <Row>
        <Col>
          <Card className="cards" >
            <Card.Img className='cards-img' src={soup1} />
            <Card.Body>
              <Card.Title>Борщ з куркою</Card.Title>
              <Card.Text>

              </Card.Text>
              <Link to="/recipes/Soups/soup-recipe1">Переглянути рецепт</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cards" >
            <Card.Img className='cards-img' src={soup2} />
            <Card.Body>
              <Card.Title>Солянка збірна м’ясна</Card.Title>
              <Card.Text>
              </Card.Text>
              <Link to="/recipes/Soups/soup-recipe2">Переглянути рецепт</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cards" >
            <Card.Img className='cards-img' src={soup3} />
            <Card.Body>
              <Card.Title>Домашня юшка</Card.Title>
              <Card.Text>
              </Card.Text>
              <Link to="/recipes/Soups/soup-recipe3">Переглянути рецепт</Link>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
      </Container>
    </>
  );
}

export default SoupsMenu;
