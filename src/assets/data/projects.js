import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc:
      'Um aplicativo para rastrear todos os seus dados de um só lugar. Eu desenvolvi o site e o aplicativo móvel',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'Um aplicativo para ajudar as pessoas a terem uma visão geral de como podem tornar a cidade bonita.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Usando este aplicativo, você pode rastrear qualquer moeda e. Além disso, você receberá um bom conselho sobre o investimento do profissional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'Um portfólio para Cavin jr. Um artista da cidade de Nova York. O portfólio é feito com ReactJs e GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'Um site de rastreamento que mostrará o desempenho do site. Além disso, você receberá alguns conselhos úteis para melhorar o desempenho.',
    img: ProjectImg,
  },
];

export default projects;
