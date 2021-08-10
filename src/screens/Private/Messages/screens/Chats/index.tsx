import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout/index';
import ChatItem from './components/MessageItem/index';

// const mockData = [
//   {
//     id: '1',
//     name: 'Naruto Uzumaki',
//     pic: 'https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png',
//     message: 'Preciso que vc me ajude a resgatar o Sasuke',
//     time: '12:01',
//     notReadMsgs: '12',
//   },
//   {
//     id: '2',
//     name: 'Son Goku',
//     pic: 'https://static.wikia.nocookie.net/b847873f-57b3-4754-902e-ec5e95f19bb0',
//     message: 'Vc disse esfera do dragão? Fracassado',
//     time: '11:42',
//     notReadMsgs: '1',
//   },
//   {
//     id: '3',
//     name: 'Izuku Midoriya',
//     pic: 'https://img.quizur.com/f/img5df7ddffebb811.45440991.jpg?lastEdited=1576525315',
//     message: 'Eu? One-for-all? Que absurdo te contaram?',
//     time: '11:30',
//     notReadMsgs: '5',
//   },
//   {
//     id: '4',
//     name: 'Eren Jaeger',
//     pic: 'http://images6.fanpop.com/image/photos/42900000/Eren-Jaeger-pureheroine-42943920-300-300.jpg',
//     message: 'Tatakae! Morram titãs!',
//     time: '11:26',
//     notReadMsgs: '2',
//   },
//   {
//     id: '5',
//     name: 'Satoru Gojo',
//     pic: 'https://i1.sndcdn.com/artworks-KQCuYKIGRerZWn88-esGz5g-t500x500.jpg',
//     message: 'Se liga na minha expansão de domínio',
//     time: '10:03',
//     notReadMsgs: '4',
//   },
//   {
//     id: '6',
//     name: 'Edward Elric',
//     pic: 'https://i.pinimg.com/originals/9b/75/e2/9b75e2cf7be6b02ba31999a007677d95.jpg',
//     message: 'Eu não sou baixinho!!!',
//     time: '10:00',
//     notReadMsgs: '8',
//   },
//   {
//     id: '7',
//     name: 'Tanjiro Kamado',
//     pic: 'https://sm.ign.com/ign_br/screenshot/default/tanjiro_ef6a.jpg',
//     message: 'Vc pode ajudar a minha irmã a virar',
//     time: '09:03',
//     notReadMsgs: '2',
//   },
//   {
//     id: '8',
//     name: 'Sem Rosto',
//     pic: 'https://4.bp.blogspot.com/-BRSayAarx18/WcywPSAX-1I/AAAAAAAAAxI/Ju3iJ3ayL9sdT9U1dEEhg9e-Q8opqPw8QCLcBGAs/s1600/No-Face-in-Spirited-Away.jpg',
//     message: 'a',
//     time: '09:01',
//     notReadMsgs: '1',
//   },
//   {
//     id: '9',
//     name: 'Asta',
//     pic: 'https://criticalhits.com.br/wp-content/uploads/2020/11/asta-black-clover.jpg',
//     message: 'Vou me tornar o rei mago!',
//     time: '08:34',
//     notReadMsgs: '3',
//   },
// ];

const mockData = [
  {
    id: '1',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '12:30',
    notReadMsgs: '1',
  },
  {
    id: '2',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '12:25',
    notReadMsgs: '1',
  },
  {
    id: '3',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '12:20',
    notReadMsgs: '1',
  },
  {
    id: '4',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '12:08',
    notReadMsgs: '1',
  },
  {
    id: '5',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '11:45',
    notReadMsgs: '1',
  },
  {
    id: '6',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '11:37',
    notReadMsgs: '1',
  },
  {
    id: '7',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '09:20',
    notReadMsgs: '1',
  },
  {
    id: '8',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '09:15',
    notReadMsgs: '1',
  },
  {
    id: '9',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '08:40',
    notReadMsgs: '1',
  },
  {
    id: '10',
    name: 'BH Softwares',
    pic: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGZ4UbQz9k_TQ/company-logo_200_200/0/1557782287938?e=2159024400&v=beta&t=wWlBawyolaAl_qvTot4Nvbx0JpEEAhOGO5ZOIMjxxwQ',
    message: 'Olá, como vai?',
    time: '08:20',
    notReadMsgs: '1',
  },
];

const Chats: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Mensagens de Clientes" />;
  }

  return (
    <PrivateLayout screenName="Mensagens de Clientes">
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem data={item} />}
      />
    </PrivateLayout>
  );
};

export default Chats;
