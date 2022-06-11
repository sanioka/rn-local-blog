import { Image } from "react-native";

export const MOCK_DATA_ONE = [
  {
    id: '1',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'Awesome text for post 1',
    date: new Date().toJSON(),
    booked: true
  },
  {
    id: '2',
    img:
      'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
    text: 'Awesome text for post 2',
    date: new Date().toJSON(),
    booked: true
  },
  {
    id: '3',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'Awesome text for post 3',
    date: new Date().toJSON(),
    booked: false
  },
  {
    id: '4',
    img:
      'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
    text: 'Awesome text for post 4',
    date: new Date().toJSON(),
    booked: false
  },
  {
    id: '5',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'Awesome text for post 5',
    date: new Date().toJSON(),
    booked: false
  }
]

export const MOCK_DATA_CARS = [
  {
    img: Image.resolveAssetSource(require('./image_z4.jpeg')).uri,
    text: 'BMW Z4 is dynamic and emotional cabrio, but the stiffness of the suspension will remind you of your back. \n\n Not recommended for long trips. Weekend car only.',
    date: new Date().toJSON(),
    booked: false
  },
  {
    img: Image.resolveAssetSource(require('./image_a3.jpeg')).uri,
    text: 'Audi A3 1.4TFSI is awesome, it has minimal allowed comfort for me and excellent explosive dynamic with dual-robot transmission',
    date: new Date().toJSON(),
    booked: false
  },
  {
    img: Image.resolveAssetSource(require('./image_slk.jpeg')).uri,
    text: 'MB SLK R172 its emotional and comfortable flagman. \n No any conclusions, just fly!',
    date: new Date().toJSON(),
    booked: false
  },
  {
    img: Image.resolveAssetSource(require('./image_e200.jpeg')).uri,
    text: 'MB E200 has comfort++ and perfect inside/outside look. \n But you cannot quickly change his character to explosive, as the BMW 520 allow.',
    date: new Date().toJSON(),
    booked: false
  },
]