import { Toast, ToastBody, Button } from "reactstrap"


const SuccessToast = (props: {
    toastIsOpen: boolean
    setToastIsOpen: (isOpen: boolean) => void
}) =>{
    return(
        <Toast
            className="bg-success text-white fixed-bottom ms-auto me-4 mb-4"
            isOpen={props.toastIsOpen}
            fade
        >
            <ToastBody className="d-flex justify-content-between">
                Pedido adicionado.
                <Button
                    close
                    className="btn-close"
                    onClick={() => props.setToastIsOpen(false)}
                >
                </Button>
            </ToastBody>
        </Toast>
    )
}

export default SuccessToast