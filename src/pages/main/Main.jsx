// main/Main.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SoupImg, MainDishesImg, SaladImg, DessertImg, DrinkImg } from '../../image/Main/components';
import Footer from './Footer';
import { soup1 } from '../../image/soups/components';
import { salad2 } from '../../image/salads/components';
import { mainDishes2 } from '../../image/main-dishes/components';
import { dessert2 } from '../../image/dessert/components';
import '../../css/Main/main.css';
import CommentList from '../../context/CommentList';
import { CommentsProvider } from '../../context/CommentsContext';
const Main = () => {
  const carouselImages = [soup1, mainDishes2, salad2, dessert2, DrinkImg];
  return (
    <CommentsProvider>
    <Container>
      <h1 className="mt-5">Ласкаво просимо в ресторан "Ratatouille"!</h1>
      <p>
        Дегустуйте наші смачні страви та насолоджуйтеся атмосферою ресторану.
      </p>

      <Carousel>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '1000px', height: '550px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='about-us-container'>
        <h2 className='about-us-heading'>Про нас</h2>
        <div className="about-us-content">
        <p>
          Ласкаво просимо в ресторан "Ratatouille" - місце, де справжня гастрономічна магія поєднується з
          неперевершеним обслуговуванням. Наш ресторан відомий своєю традиційною кухнею та неповторним
          атмосферним дизайном.
        </p>
        <p>
          Ми горді представляти найкращі страви від наших талановитих шеф-кухарів та завжди прагнемо здивувати
          наших гостей унікальними смаками та враженнями.
        </p>
        <p>
          Завітайте до "Ratatouille" та насолоджуйтеся смаком високої кухні у затишній атмосфері нашого ресторану.
        </p>
        </div>
      </div>
      <h2 className="mt-5">Найпопулярніші рецепти легендарного кухаря Густо!</h2>
      <Row>
        <Col >
          <Card className="recipe-card" >
            <Card.Img variant="top" style={{ height: '180px' }} src={SoupImg} />
            <Card.Body>
              <Card.Title>Супи</Card.Title>
              <Card.Text>
                Спробуйте наші смачні супи. Вони приготовані з найсвіжіших інгредієнтів під керівництвом наших талановитих шеф-кухарів.
              </Card.Text>
              <Link to="/recipes/Soups">Перейти</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="recipe-card">
            <Card.Img variant="top" style={{ height: '180px' }} src={MainDishesImg} />
            <Card.Body>
              <Card.Title>Головні страви</Card.Title>
              <Card.Text>
                Ви отримаєте найкращі гастрономічні враження, насолоджуючись унікальними смаками наших головних страв.
              </Card.Text>
              <Link to="/recipes/MainDishes">Перейти</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="recipe-card">
            <Card.Img variant="top" style={{ height: '180px' }} src={DessertImg} />
            <Card.Body>
              <Card.Title>Десерти</Card.Title>
              <Card.Text>
                Скуштуйте наші вишукані десерти та пориньте у світ солодкого задоволення.
              </Card.Text>
              <Link to="/recipes/Desserts">Перейти</Link>
            </Card.Body>
          </Card>
        </Col>

        

      </Row>
      <CommentList/>
      <Footer />
    </Container>
    </CommentsProvider>
  );
};

export default Main;
