import artemisia from '../../assets/products/ARTEMISIA AFRA.png'
import lekki from '../../assets/products/LEKKI_DANEWEL-removebg-preview.png'
import vermifuge from '../../assets/products/WORM_120G-removebg-preview.png'
import makaya from '../../assets/products/MAKAYA-removebg-preview.png'

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
    toTreat: ["vers intestinaux", "maux d'estomac", "+"],
    composition: ["feuilles d'artémisia", "..."],
    description: "Le Artemisia est une plante avec de nombreuses vertues. Il permet de prendre en charge plusiers maladies, gripes etc ..."
  },
  {
    name: "Makaya",
    types: ["liquide", "écorces"],
    picture: makaya,
    toTreat: ["vers intestinaux", "maux d'estomac", "+"],
    composition: ["compo A", "compo B", "..."],
    description: "Retrouvez ou conservez votre jeunesse, traite les rides, sogne les cheveux, et lutte contre le vieillissement ..."
  },
  {
    name: "Lekki Danewel",
    types: ["liquide", "plantes"],
    picture: lekki,
    toTreat: ["drépanocitose", "anémie sévère", "+"],
    composition: ["compo A", "compo B", "..."],
    description: "Fer naturel pour plus de sang, revitalisant en cas d'affaiblissement dûe à une maladie quelconque."
  }
]

export default products;