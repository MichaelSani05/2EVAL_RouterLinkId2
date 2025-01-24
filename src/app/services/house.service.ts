import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private houses = [
    {
      id: 1,
      name: 'Durmiendo entre arboles/cabañas con encanto Rioja',
      type: 'Casa del árbol',
      city: 'Rioja',
      country: 'España',
      location: 'Playa de la Malvarrosa',
      host: 'Carlos Rodriguez',
      rating: 4.8,
      description: 'Entre Chopos, helechos y flores se encuentran estas románticas cabañas ecológicas. Sumérgete en la magia de este bonito y privilegiado entorno riojano.',
      pricePerNight: 206,
      image: '../../assets/images/houses/house-1.avif',
      category: 'Cabaña',
    },
    {
      id: 2,
      name: 'Casa relajante cercana a la playa',
      type: 'Alojamiento entero: vivienda',
      city: 'València',
      country: 'España',
      location: 'Cabañal',
      host: 'Eugenia',
      rating: 4.8,
      description: 'Casa luminosa ycompletamente reformada en Cabañal, a 5 min a pie de la playa y a 10 min del centro en transporte público. Casa típica, tiene un pequeño patio ideal para una estancia inolvidable en Valencia.',
      pricePerNight: 100,
      image: '../../assets/images/houses/house-2.webp',
      category: 'Playa',
    },
    {
      id: 3,
      name: '1º Línea de Playa | Recinto de lujo con Piscina',
      type: 'Alojamiento entero: apto. residencial',
      city: 'Alboraia',
      country: 'España',
      location: 'Patacona ',
      host: 'Veronica',
      rating: 4.9,
      description: 'La propiedad se compone de un salón-comedor con sofá-cama para una persona, una habitación con cama doble y otra habitación con dos camas individuales. Dispone de balcón con vistas al mar y a la piscina de la comunidad, tiene mesa exterior y sillas para comer o teletrabajar con las maravillosas vistas.',
      pricePerNight: 78,
      image: '../../assets/images/houses/house-3-2.avif',
      category: 'Playa',
    },
    {
      id: 4,
      name: 'ApartUP Patacona Terrace Duplex',
      type: 'Alojamiento entero: apartamento',
      city: 'Alboraya / Alboraia',
      country: 'España',
      location: 'Alboraya / Alboraia',
      host: 'Alberto',
      rating: 4.8,
      description: 'Lujoso apartamento situado en primera línea de playa. Puede alojar hasta 4 personas. Cuenta con parking privado y una impresionante terraza con una amplia zona de estar con mesa y reposeras, en donde podrás desconectar del estrés de la ciudad y disfrutar del sabor del verano.',
      pricePerNight: 120,
      image: '../../assets/images/houses/house-4.avif',
      category: 'Playa',
    },
    {
      id: 5,
      name: 'Cabañal Beach Apartment 1',
      type: 'Alojamiento entero: apartamento',
      city: 'València',
      country: 'España',
      location: 'Cabañal',
      host: 'Carmen',
      rating: 4.92,
      description: 'Relájate y desconecta en este MAGNÍFICO alojamiento, muy tranquilo y elegante, situado en el emblemático barrio marinero del Cabanyal, situado tan solo 5 minutos andando a la playa de las Arenas, y ubicado a escasos metros andando del Campo de hockey hierba Tarongers.',
      pricePerNight: 90,
      image: '../../assets/images/houses/house-5.avif',
      category: 'Playa',
    },
    {
      id: 6,
      name: 'Moradas no Ulla 6. Cabañas de Compostela.',
      type: 'Alojamiento entero: cabaña',
      city: 'Galicia',
      country: 'España',
      location: 'Santiago de Compostela',
      host: 'Fran',
      rating: 4.97,
      description: 'La cabaña se sitúa en un hermoso paraje, a solo 10 minutos de Santiago de Compostela, en la que pasar unos tranquilos y románticos días rodeados de naturaleza al lado del río Ulla, en un nuevo concepto de turismo rural.',
      pricePerNight: 104,
      image: '../../assets/images/houses/house-6.webp',
      category: 'Cabaña',
    },
    {
      id: 7,
      name: 'Casa de madera con piscina privada',
      type: 'Alojamiento entero: cabaña',
      city: 'Este (São Mamede)',
      country: 'Portugal',
      location: 'Playa de la Malvarrosa',
      host: 'Mónica',
      rating: 4.8,
      description: 'Casa con 3 dormitorios, 2 baños (1 de ellos suite), cocina totalmente equipada y área de ocio al aire libre con piscina. Lo más destacado de esta casa es el campo, el espacio al aire libre y la ubicación, un lugar tranquilo a las puertas de la ciudad de Braga y de camino a Gerês.',
      pricePerNight: 182,
      image: '../../assets/images/houses/house-7.avif',
      category: 'Cabaña',
    },
    {
      id: 8,
      name: 'Valderrodies. Cabaña a 10 km de Potes',
      type: 'Alojamiento entero: cabaña',
      city: 'Cantabria',
      country: 'España',
      location: 'Cabezón de Liébana',
      host: 'María Jesús',
      rating: 4.5,
      description: 'Acogedora casa nueva e independiente  que se encuentra en una aldea donde podrá disfrutar de un entorno natural y tranquilo. A 10 kilómetros se encuentra Potes.Pueblo en el que encontrará los servicios necesarios, (supermercados , bancos,amplia oferta de restaurantes ...).',
      pricePerNight: 70,
      image: '../../assets/images/houses/house-8.avif',
      category: 'Cabaña',
    },
    {
      id: 9,
      name: 'ApartUP Patacona Panoramic',
      type: 'Alojamiento entero: apartamento',
      city: 'Alboraia',
      country: 'España',
      location: 'Playa de la Patacona',
      host: 'Alberto',
      rating: 4.83,
      description: 'Apartamento de 93m2 para 4 personas con vistas espectaculares, está ubicado en la Playa de la Patacona, un barrio marinero residencial con todo lo necesario. A 15 minutos del Centro Histórico de la ciudad y de la Ciudad de las Artes y las Ciencias y a tan solo 25 minutos del Parque Natural de la Albufera.',
      pricePerNight: 108,
      image: '../../assets/images/houses/house-9.avif',
      category: 'Playa',
    },
    {
      id: 10,
      name: 'LA CABAÑA, un verdadero nido',
      type: 'Minicasa ',
      city: 'Gèdre',
      country: 'Francia',
      location: 'Playa de la Patacona',
      host: 'Karine',
      rating: 4.76,
      description: 'Pequeño Chalet ubicado a 1200 m de altitud, frente al circo de Troumouse, en un entorno verde. No busque microondas, ni televisión, el calor y la imagen están en sus exteriores. Relajación asegurada por el vuelo de los Milans y otras rapaces en su vertical posibilidad de autonomía o media pensión en la casa de campo Escapade a 50 m.',
      pricePerNight: 100,
      image: '../../assets/images/houses/house-10.webp',
      category: 'Cabaña',
    },
    {
      id: 11,
      name: 'Villa moderna de lujo en Sierra Blanca, Marbella',
      type: 'Alojamiento entero: villa',
      city: 'Marbella',
      country: 'España',
      location: 'Sierra Blanca',
      host: 'Marina',
      rating: 4.86,
      description: 'Villa moderna de lujo con vistas panorámicas con una ubicación privilegiada. Basado en la zona más exclusiva de Marbella, Sierra Blanca. Comunidad cerrada con seguridad las 24 horas y a 5 minutos en coche de Golden Mille. Exclusiva villa con un diseño interior elegante y único bajo la mano de Versace.',
      pricePerNight: 3800,
      image: '../../assets/images/houses/house-11.avif',
      category: 'Mansion',
    },
    {
      id: 12,
      name: 'Villa Tania, Marbella',
      type: 'Alojamiento entero: villa',
      city: 'Marbella',
      country: 'España',
      location: 'Marbella',
      host: 'Stayhost',
      rating: 4.70,
      description: 'El exuberante follaje se llena de brisa en esta escapada tradicional de Marbella. La luz del sol enciende el acogedor interior, destacando la decoración de madera y las suntuosas telas. Una piscina de color azul profundo refleja las palmeras elevadas y el cielo interminable, lo que te atrae a un chapuzón refrescante.',
      pricePerNight: 1870,
      image: '../../assets/images/houses/house-12.avif',
      category: 'Mansion',
    },
    {
      id: 13,
      name: 'Villa Luz 21, villa grande y espaciosa',
      type: 'Alojamiento entero: villa',
      city: 'Silves',
      country: 'Portugal',
      location: 'Poço Barreto',
      host: 'Amarante',
      rating: 4.47,
      description: 'Hermosa villa con 9 dormitorios, 7 baños, salón con chimenea y mesa de billar, amplios balcones, amplio jardín bien cuidado, barbacoa cubierta y piscina privada de 12x6m, ubicada en Poço Barreto, en el sur / este de Silves cerca del Amendoeiras Golf Resort.',
      pricePerNight: 875,
      image: '../../assets/images/houses/house-13.avif',
      category: 'Mansion',
    },
    {
      id: 14,
      name: 'La mejor villa en primera línea del Mediterráneo',
      type: 'Alojamiento entero: villa',
      city: 'Calpe',
      country: 'España',
      location: 'Costa Blanca',
      host: 'Alexey',
      rating: 4.65,
      description: 'La villa está situada en la primera línea del mar con vistas absolutamente increíbles de la principal atracción de la Costa Blanca, la roca Penón de Ifach. La enorme piscina climatizada infinita tiene una longitud de 17 metros y es adecuada para bucear (profundidad máxima 2,5 metros).',
      pricePerNight: 667,
      image: '../../assets/images/houses/house-14.avif',
      category: 'Mansion',
    },
    {
      id: 15,
      name: 'Villa de 6 dormitorios con sala de cine y piscina',
      type: 'Alojamiento entero: villa',
      city: 'Marbella',
      country: 'España',
      location: 'Costa Blanca',
      host: 'Swish',
      rating: 4.65,
      description: 'La villa está situada en la primera línea del mar con vistas absolutamente increíbles de la principal atracción de la Costa Blanca, la roca Penón de Ifach. La enorme piscina climatizada infinita tiene una longitud de 17 metros y es adecuada para bucear (profundidad máxima 2,5 metros).',
      pricePerNight: 1.338,
      image: '../../assets/images/houses/house-15.avif',
      category: 'Mansion',
    },
  ];

  constructor() {}

  getHouses() {
    return this.houses;
  }

  getHouseById(id: number) {
    return this.houses.find(house => house.id === id);
  }

  filterHousesByCity(city: string) {
    return this.houses.filter(house => house.city.toLowerCase() === city.toLowerCase());
  }

  filterHousesByCategory(category: string) {
    return this.houses.filter(house => house.category.toLowerCase() === category.toLowerCase());
  }

  filterHousesByPriceRange(minPrice: number, maxPrice: number) {
    return this.houses.filter(house => house.pricePerNight >= minPrice && house.pricePerNight <= maxPrice);
  }
}
