import { GiTimeBomb, GiRoyalLove } from 'react-icons/gi'
import { FaChild } from 'react-icons/fa'

import one from '../../assets/photos/1.jpeg'
import two from '../../assets/photos/2.jpeg'

const specialities = [
  {
    title: "MST/IST/CHLAMEDIA",
    description: "Nous traitons de nombreux cas de MST tous les jours, de nombreuseux malades n'ayant jamais trouvé de solutions à leurs problèmes repartent entièrement guéries, ou en meilleure forme que jamais!",
    Icon: GiRoyalLove,
    color: 'var(--color-secondary)',
    image: one,
    examples: [
      {
        name: "VIH",
        status: "Meilleure Vie"
      },
      {
        name: "Epathites",
        status: "Guérison Complète"
      },
    ]
  },
  {
    title: "VÉILLISSEMENT",
    description: "Qu'il y a t-il de plus difficile que de veillir. Nous accordons une place de choix aux traitement des personnes agées.",
    Icon: GiTimeBomb,
    color: 'var(--color-main)',
    image: two,
    examples: [
      {
        name: "Arthrose",
        status: "Guérison Complète"
      },
      {
        name: "Rhumatismes",
        status: "Guérison Complète"
      },
    ]
  }, 
  // {
  //   title: "PÉDIATRIE",
  //   description: "Nous occupons.",
  //   Icon: FaChild,
  //   color: 'var(--color-secondary)',
  //   image: two,
  //   examples: [
  //     {
  //       name: "Arthrose",
  //       status: "Guérison Complète"
  //     },
  //     {
  //       name: "Rhumatismes",
  //       status: "Guérison Complète"
  //     },
  //   ]
  // }
]

export default specialities;