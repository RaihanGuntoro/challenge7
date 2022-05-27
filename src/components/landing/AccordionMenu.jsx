import { Accordion} from "react-bootstrap"

const AccordionMenu = () => (

  <div className="frequenly mlmr-70" >
    <div className="container" id="FAQ">
      <div className="row">

        <div className="col-md-4 tengah">
          <h4 className="bold ">Frequently Asked Question</h4>
          <p>Lorem ipsum sit amet, consectetur elit</p>
        </div>

        <div className="col-md-8">
          <div>
            <Accordion>
              <Accordion.Item eventKey="0" className="mb-20">
                <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="mb-20">
                <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="mb-20">
                <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="mb-20">
                <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </Accordion.Body>
              </Accordion.Item>
              
                <Accordion.Item eventKey="4" className="mb-20">
                <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AccordionMenu