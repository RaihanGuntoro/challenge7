import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimoniMenu = () => (
    <div>
        <div className="container-fluid grid-service grid-service1">
            <div className="row">
                <div className="col-sm text-center"> <br />
                    <h3><b>Testimonial</b></h3>
                    <p className="pt-2">Berbagai review positif dari para pelanggan kami</p>
                </div>
            </div>
        </div>
        <OwlCarousel items={2} className='owl-theme' loop center margin={10} nav>
            <div class=" item ">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="icon/orang1.png" class="foto mt-10besar" />
                    </div>
                    <div class="col-md-8">
                        <img src="icon/star.png" class="wi-22 fototengah mt-10besar" />
                        <div class=" mr-10">
                            <p class="mt-10 mkanan-30">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse, dolore nostrum dolores similique harum a? Laboriosam exercitationem saepe ratione fugiat, eum earum vitae pariatur vel totam error at ea?"</p>
                            <p class="bold mb-30">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>



            <div class=" item ">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="icon/orang2.png" class="foto mt-10besar" />
                    </div>
                    <div class="col-md-8 ">
                        <img src="icon/star.png" class="wi-22 fototengah mt-10besar" />
                        <div class="mr-10">
                            <p class="mt-10 mkanan-30">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse, dolore nostrum dolores similique harum a? Laboriosam exercitationem saepe ratione fugiat, eum earum vitae pariatur vel totam error at ea?"</p>
                            <p class="bold mb-30">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>



            <div class=" item ">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="icon/orang1.png" class="foto mt-10besar" />
                    </div>
                    <div class="col-md-8 ">
                        <img src="icon/star.png" class="wi-22 fototengah mt-10besar" />
                        <div class="mr-10">
                            <p class="mt-10 mkanan-30">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse, dolore nostrum dolores similique harum a? Laboriosam exercitationem saepe ratione fugiat, eum earum vitae pariatur vel totam error at ea?"</p>
                            <p class="bold mb-30">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>;
    </div>
)
export default TestimoniMenu