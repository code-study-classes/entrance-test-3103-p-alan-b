export const guests = [
    { id: 1, name: 'Иванов Иван Иванович', phone: '1234567890' },
    { id: 2, name: 'Петров Петр Петрович', phone: '9876543210' },
    { id: 3, name: 'Сидоров Сидор Сидорович', phone: '1112223333' },
    { id: 4, name: 'Кузнецов Кузьма Кузьмич', phone: '4445556666' }
  ];
  
  export const payers = [
    { id: 1, name: 'Иванов Иван Иванович', type: 'физическое лицо' },
    { id: 2, name: 'ООО "Компания"', type: 'юридическое лицо' }
  ];
  
  export const hotels = [
    {
      id: 1,
      name: 'Отель 1',
      rooms: [
        { id: 1, number: '101', category: 'Стандарт', status: 'свободен' },
        { id: 2, number: '102', category: 'Люкс', status: 'свободен' },
        { id: 3, number: '103', category: 'Апартаменты', status: 'свободен' }
      ]
    },
    {
      id: 2,
      name: 'Отель 2',
      rooms: [
        { id: 4, number: '201', category: 'Стандарт', status: 'свободен' },
        { id: 5, number: '202', category: 'Люкс', status: 'свободен' },
        { id: 6, number: '203', category: 'Апартаменты', status: 'свободен' }
      ]
    }
  ];