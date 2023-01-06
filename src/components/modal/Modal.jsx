import Modal_css from "./Modal.module.css";

export const Modal = () => {
    const { Overlay, Modal } = Modal_css;
    return (
    <div className={Overlay}>
        <div className={Modal}>
            <img src="#" alt="#" />
        </div>
    </div>
    )
}