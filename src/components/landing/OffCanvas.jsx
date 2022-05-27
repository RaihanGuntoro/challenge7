import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

const OffCanvasMenu  = () => (

    <div>
    <Button
        color="primary"
        onClick={function noRefCheck(){}}
    >
        BCR
    </Button>
    <Offcanvas toggle={function noRefCheck(){}}>
        <OffcanvasHeader toggle={function noRefCheck(){}}>
        Offcanvas
        </OffcanvasHeader>
        <OffcanvasBody>
        <strong>
            This is the Offcanvas body.
        </strong>
        </OffcanvasBody>
    </Offcanvas>
    </div>
)

export default OffCanvasMenu