import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    name: 'I.V',
    desc:
      'Uma plataforma de um curso online por matrícula.',
    img: "https://res.cloudinary.com/robles-identity/image/upload/v1633873387/IMG_20211008_234354420_HDR_1_wf2whb.jpg",
  },
  {
    id: uuidv4(),
    name: 'Beat Goals',
    desc:
      'Um site para apostas online.',
    img: "https://res.cloudinary.com/robles-identity/image/upload/v1633873873/IMG_20211008_231845225_HDR_lvanjp.jpg",
  },
  {
    id: uuidv4(),
    name: 'Lu Cakes',
    desc:
      'Um site de vendas de doces e bolos',
    img: "https://res.cloudinary.com/robles-identity/image/upload/v1633874080/IMG_20211008_232446306_HDR_jkpv8s.jpg",
  },
];

export default projects;
