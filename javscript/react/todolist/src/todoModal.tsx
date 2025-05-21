import { Button, Modal } from "react-bootstrap";

type todo = {
    id: number;
    text : string;
    isChecked : boolean;
}
type TodoModalProps = {
    show: boolean;
    handleClose : () => void;
    // todo: Todo | null;
}

const TodoModal: React.FC = ({show, handleClose}) => {
    return (
      <>
        <Modal show={show} centered onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>상세정보</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                자세한 정보를 출력합니다.
                <p>현재날짜 : {new Date().toLocaleDateString()} </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                    onClick={() => { handleClose(); } }
                >닫기</Button>
            </Modal.Footer>
        </Modal>
    </>            

    )
}

export default TodoModal;