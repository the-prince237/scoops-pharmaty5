import artemisia from '../../assets/products/ARTEMISIA AFRA.png'
import lekki from '../../assets/products/LEKKI_DANEWEL-removebg-preview.png'
import vermifuge from '../../assets/products/WORM_120G-removebg-preview.png'
import detox from '../../assets/products/detoxplus.jpeg'

const products = [
  {
    name: "vermifuge",
    types: ["liquide", "écorces"],
    picture: vermifuge,
    toTreat: ["vers intestinaux", "maux d'estomac", "+"],
    composition: ["compo A", "compo B", "..."],
    description: "Les vermifuges sont des médicament fortement demandés pour leur teneur importante en ..."
  },
  {
    name: "artemisia",
    types: ["écorces"],
    picture: artemisia,
    toTreat: ["Fièvres", "tiphoïde", "Paludisme", "+"],
    composition: ["feuilles d'artémisia", "..."],
    description: "Le Artemisia est une plante avec de nombreuses vertues. Il permet de prendre en charge plusiers maladies, nottamment celles de type gripes et causant des fièvres ..."
  },
  {
    name: "Lekki Danewel",
    types: ["liquide", "plantes"],
    picture: lekki,
    toTreat: ["drépanocitose", "anémie sévère", "+"],
    // composition: ["compo A", "compo B", "..."],
    description: "Fer naturel pour plus de sang, revitalisant en cas d'affaiblissement dûe à une maladie quelconque."
  },
  {
    name: "DETOX PLUS",
    types: ["poudre", "plantes"],
    picture: detox,
    // toTreat: ["drépanocitose", "anémie sévère", "+"],
    // composition: ["compo A", "compo B", "..."],
    description: "Antibiotique, purificateur et évacuateur pour le nettoyage du système digestif, de la ceinture rénale et du système sanguin."
  }
]

export default products;