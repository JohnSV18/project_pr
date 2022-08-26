import Carousel from 'react-bootstrap/Carousel'
import randimage from '../../assets/dummyimage.jpg'

function Home () {
    return (
        <div className="Home">
            <Carousel>
              <Carousel.Item>
                  <img src={ randimage }/>
                  <Carousel.Caption>
                    <h2>
                        "I hated every minute of training but I said... Don't quit. Suffer
                        now and live the rest of your life as a champion." -Muhammad Ali
                    </h2>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    src={ randimage }
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h2>
                        "I hated every minute of training but I said... Don't quit. Suffer
                        now and live the rest of your life as a champion." -Muhammad Ali
                    </h2>
                 </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home;