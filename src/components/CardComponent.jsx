import styled from 'styled-components';
{/*Alert Package */}
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
{/*images*/}
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import VectorBlack from '../assets/VectorBlack.svg';
import ProVector from '../assets/ProVector.svg';


const MySwal = withReactContent(Swal);

export const CardComponent = () => {

  const onClick = async () => {
    const { value: email } = await MySwal.fire({
      title: 'Enter your email to contact us',
      input: 'email',
      html: <p>Your email address</p>,
      inputPlaceholder: 'Enter your email address',
      confirmButtonText: <p>Confirm</p>,
    })
    
    if (email) {
      MySwal.fire({
        title:'Email sent',
        html: <p>We will contact you shortly</p>,
        confirmButtonText: <p>Exit</p>
      })
    }
  }

  return (
    <Container>

      {/**Card1 */}
      <Cardwhite variant = 'primary'>
          
          <picture>
            <img src={image1} alt="planImage" />
          </picture>

          <div className='container__price'>
            <p>Starter</p>
            <h2>Free</h2>
            <p>per month</p>
          </div>

          <ul>
            <li><span></span>Full courses library</li>
            <li><span></span>A new daily meditation</li>
            <li><span></span>Access to the meditation guru</li>
            <li><span></span>Sleep podcasts and exercises</li>
            <li><span></span>Mindfulness exercises</li>
            <li><span></span>Guided meditations</li>
            <li><span></span>Cooking recipes</li>
          </ul>

          <div className='container__button'>
            <button onClick={onClick}>
              Get Started
            </button>
          </div>
          
          
      </Cardwhite>

      {/**Card2 */}
      <Cardpurple >
          
          <picture>
            <img src={image2} alt="planImage" />
          </picture>
          
          <div className='container__price'>
            <p>Pro</p>
            <h2>$49</h2>
            <p>per month</p>
          </div>

          <ul>
            <li><span></span>Full courses library</li>
            <li><span></span>A new daily meditation</li>
            <li><span></span>Access to the meditation guru</li>
            <li><span></span>Sleep podcasts and exercises</li>
            <li><span></span>Mindfulness exercises</li>
            <li><span></span>Guided meditations</li>
            <li><span></span>Cooking recipes</li>
          </ul>

          <div className='container__button'>
            <button onClick={onClick}>
              Become a Pro
            </button>
          </div>
          
      </Cardpurple>

      {/**Card3 */}
      <Cardwhite variant='secondary'>
          
          <picture>
            <img src={image3} alt="planImage" />
          </picture>

          <div className='container__price'>
            <p>Pro</p>
            <h2>$99</h2>
            <p>per month</p>
          </div>

          <ul>
            <li><span></span>Full courses library</li>
            <li><span></span>A new daily meditation</li>
            <li><span></span>Access to the meditation guru</li>
            <li><span></span>Sleep podcasts and exercises</li>
            <li><span></span>Mindfulness exercises</li>
            <li><span></span>Guided meditations</li>
            <li><span></span>Cooking recipes</li>
          </ul>

          <div className='container__button button__third'>
            <button onClick={onClick}>
              Get Teams
            </button>
          </div>
          
      </Cardwhite>

    </Container>
  )
}


export default CardComponent;


// Syles

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 20px;
  flex-wrap: wrap;

  p{
    font-size: 1.2rem;
  }

  .container__price{
    margin-top: 16px;
  }

  .container__button {
    display: flex;
    justify-content: center;
}

`

const Cardwhite = styled.article `
  width: 284px;
  background-color: white;
  border-radius: 8px;
  padding: 30px;

    span {
      background: url(${VectorBlack});
    }

    ul li:nth-last-child(-n+4){
      opacity:${props => props.variant === 'primary' && "40%"};
    }

    h2 + p{
      color:#5F6974;
    }
    
    button {
      background-color: ${props => props.variant === 'secondary' ? "#5A45F2" : "white"};
      color: ${props => props.variant === 'secondary' && "white"};
      border: 1px solid #5A45F2;
    }
`

const Cardpurple = styled.article `
  background-color: #5A45F2;
  width: 284px;
  border-radius: 8px;
  padding: 30px;
  color: white;
  border: 2px solid black;

    span {
      background: url(${ProVector});
    }
    
    button{
      border: none;
      color: white;
      background-color:black;
    };

    ul li:nth-last-child(-n+2) {
      opacity: 40%;
    }
`
