import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import KitchenImgCarousel from "./KitchenImgCarousel";

function KitchenImgModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div className="img-wrapper">
        <img onClick={handleShow} src={props.data[0]} alt="Kitchen pictures" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <KitchenImgCarousel data={props.data} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default KitchenImgModal;
