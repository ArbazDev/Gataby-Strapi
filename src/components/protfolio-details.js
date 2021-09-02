import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { render } from 'react-dom';
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "gatsby-transformer-sharp";
import SwiperCore, { Pagination, Navigation } from "swiper";
import ModalPortfolio from "./portfoliomodal";
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"



SwiperCore.use([Pagination, Navigation]);
// import { PortfolioDetailsData } from "@/data";
const ProtfolioDetails = (data) => {
  const [modalisopen, setModalIsOpen] = useState(false);

  const {
    image,
    title,
    body,
    categories,
    date,
    socials,
  } = data;
  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Modal isOpen={modalisopen}>
          <Swiper pagination={{
            "type": "fraction"
          }} navigation={true} className="mySwiper">

            <div className="modal-content">
              {/* <SwiperSlide key={index}> */}
              {data.data.pageContext.data.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.localFile.childImageSharp.gatsbyImageData.images.fallback.src}></img>
                </SwiperSlide>
              ))}
            </div>

          </Swiper>
        </Modal>

        <div className="swiper-pagination" id="team-carousel-pagination"></div>

        <Col className="Col-lg-3" >
          <Row lg={3} md={7} sm={12}>
            {/* <div className="portDetailThumb" onClick = {()=>{ModalPortfolio}}> */}
            {data.data.pageContext.data.image.map((img, index) => (
              <div className="portDetailThumb" onClick={() => setModalIsOpen(true)}>
                <img src={img.localFile.childImageSharp.gatsbyImageData.images.fallback.src}></img>
              </div>
            ))}
            {/* </div> */}
            <Col lg={4} md={5} sm={12}>
              <div className="singlePortfoio_content">
                <h3>{data.data.pageContext.data.title}</h3>
                <ReactMarkdown children={data.data.pageContext.data.body} />
              </div>
              <div className="singlePortfoio_content">
                <h4>Category:</h4>
                <p>
                  {data.data.pageContext.data.categories}
                  {/* {categories.map(({ name }, index) => (
                  <a key={index} href={url}>
                    {name},
                  </a>
                ))} */}
                </p>
              </div>
              <div className="singlePortfoio_content">
                <h4>Date:</h4>
                <p>{data.data.pageContext.data.date}</p>
              </div>

            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};





export default ProtfolioDetails;
