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
SwiperCore.use([Pagination, Navigation]);

const ModalPortfolio = (data) => {
    const [modalisopen, setModalIsOpen] = useState(false);
    return (
        <>
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

        </>
    )
}

export default ModalPortfolio;