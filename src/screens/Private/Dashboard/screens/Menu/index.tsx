import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons, Feather, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { View } from 'react-native';
import { useToggleDashboardModal } from '~/src/context/DashboardContext';

import CustomText from '~/src/components/CustomText';

import {
  Container,
  Row,
  TextContainer,
  IconContainer,
  Header,
  ProfileContainer,
  PictureContainer,
  ProfilePic,
  ProfileInfo,
  Footer,
} from './styles';

const Menu = () => {
  const navigation = useNavigation();
  const { closeDashboardModal } = useToggleDashboardModal();

  const navigateAndCloseModal = (route: string) => {
    navigation.navigate(route);
    closeDashboardModal('menu');
  };

  const rows = [
    {
      title: 'Meu Cadastro',
      navigateTo: 'Profile',
      Icon: () => <FontAwesome5 name="user-edit" size={22} color="#30D88B" />,
    },
    {
      title: 'Mensagens',
      navigateTo: 'MessagesChats',
      Icon: () => <Feather name="mail" size={28} color="#30D88B" />,
    },
    {
      title: 'Atividades',
      navigateTo: 'PaymentsTransfer',
      Icon: () => <AntDesign name="barschart" size={28} color="#30D88B" />,
    },
    {
      title: 'Agendamentos',
      navigateTo: 'PaymentsSchedule',
      Icon: () => <Ionicons name="ios-calendar-sharp" size={28} color="#30D88B" />,
    },
  ];

  return (
    <View style={{ flex: 1, flexGrow: 1 }}>
      <Header>
        <IconContainer onPress={() => closeDashboardModal('menu')}>
          <MaterialIcons name="keyboard-arrow-left" size={35} color="#FFF" />
        </IconContainer>

        <TextContainer>
          <CustomText
            color="#FFF"
            fontSize="15"
            font="Montserrat_Bold"
            textAlign="center"
            style={{ paddingRight: 50 }}
          >
            Menu
          </CustomText>
        </TextContainer>
      </Header>

      <ProfileContainer>
        <PictureContainer>
          <ProfilePic
            source={{
              uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTEwgVFhUWGCIZGBgYGBggHhkiHRYgHRobGhkfHygjHSAxIRgdIjElMSkrLi4xGCAzODMtNygtLisBCgoKDQ0OGw8QGjMmICU3Nzc3NS4yLzc3Ny4tLS8tMDc3Ny0tLzUtLTctNS0wLS0tNy0tMDYtNzctLS8tLS0tLf/AABEIAMgAyAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAgMEBQYHAf/EAD8QAAEDAgQDBQYEAwYHAAAAAAEAAgMEEQUSITEGE1EHIkFhcRQVMoGRsUJyodEjgsEXUmKT8PEkVFVzo9Lh/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwUEBv/EADERAQACAgECBQMCAwkAAAAAAAABAgMRBBIhBRMxQVEiYbGB4cHR8BUkMkJScZGSof/aAAwDAQACEQMRAD8A7igICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICC2qIpZWWE2XUEEdOhXny48l41Ftd/YW+I4k2low9oDwXW39f2Xm5fOjDhjLTVomdJMpUGIsqKMPdZt3Zd/osuLza5cMZb6rudG1+veogICAgICAgICAgICAgICAgICAgIKckTJd23/+i39Vrvjrf/FH9egx4oHxYoZeaMgHw6/3bLnxw7U5U8jq+nXp+mkRnrqBlAHCEOZmsAGjfXwP+tVjl5fFrgi8V6q7+Pf9R5h1dSVz8jaWwHe1Dbb/AH1Th8vj8mfKrTUR39iF7HW08tQWNlBcNwvbTlYb5JxVtuYVdL0ggICAgICAgICAgICAgICAgICAgIPCARspMb7SMbieGipowyMNbZ19tNj09VzuZwfNwxixar32kwo4PhMtBUlzpGm7baX6j9lo8P8ADsnGyTe0xPbREMZH/wABxDbwzW+Tv91zKf3bxDXtv/yyeksnxZjjeHMDfUGnMgYWjKDa+Zwbv819YyaF/bRB/wBCf/mt/wDVBs3DHaDhPEMT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36rGvHz+X5MxPVeZ6p+0fzReGB1DiTSyM5HjK4AbEfCV7PKnj8mtscfTbtOvaY9JVZ0+ER1GGuvDaS7rE3vvovHi8Mpl409VdX7/AJ7Jp7PCZsPhPsRsw99gGu1jYK5cU34+K3l9qz3rpUoX0UEoc3CZQRsch/dZY78bHaL0wWiY+37p2VMQbG6rJkw0vFhlc0En0ctnKik5ZnLh6o9pj+KylhEJbVvc2ndHGQAGu8T1ssuBimMtrUpNaTHpPz8kMwuwogICAgIKFTV09K2752tB2zED7oIuraRkoaalgc7YZhc32sgq82O1+YN7b+N7W9boKcFXTT/BO12pGjgdt/uPqEHklbSxx5jUsDepcLa7aoI+8KLM0e1su74e83va2066oJtq6Z0haKhlwbEZhcEmwBHhqbIKrXNcTZw00PkgpRVlNNGXNqGFrdyHAgep8EEBiNFyc/tkeW9s2Ztr9L3Qemvo2k3qmDKMx7w0B2J121H1CCoypgkjuJmkAXuCLW636afoge0QZAec2xvY3Fjbf6WP0QQhraWdt21LHC9rhwOp2Hqgn7TBYHnNs7bUa+nVBIyxht84+vTf7H6IIQVVPUi7J2u/K4Ha19vUfUIIe8KMy5fa48x/Dmbf6XQTp6umqgSydrrb5XA2+iCugICAgICDGVkNQzEBK2ASdzJlJAI1vcE6WOx9AgtJqCrMUsYpWETa5s2jLsDbEWuctu7boNkD3POx12vGs2d7Ts4B92u8n2sD1HoEEKSjr6VzXCnBay7Wx5wS0Fo2fbUAtFr62+iBDhtZFQyRcppzwhubNoHcsi1rbXO6CrVUNVlnY2ma4TfjLrZe4G2cLXNrXFv03QUfdFWyoLrh935m3d8NpmvNtPxBoJ6EeaC7wfD6qhncXStcJBmfYWs++tutwbX/AMAQUqOgqmYC+FzTmMZYLvzD4Laad0XQUqrD62pl5nIDTdndbJZxy59c1rX74HoCgjV4bXSPfkjyh1i7+IO8Q5hBBt3H903OxsPkEqjB6qdsjmuyyOiDBmde+jg5ryNx3gQfA/MEJT4NNI99i3Lo6Np2uXh0od5HIB/M5B7U0tdU1HN9la0gs7mYXdlfmJLttNh6lB6MKqDI51hbM10bb/DeVskoJ9W6ILZmB1jWNvIDl7wFz8UjXCa/l3rj8xQVqXCaiRsRcXMdE1wa4vzEOOS1ure64EIIjBqp9G1pcy4iLDvlJMjXW65TYj0KC/pYaiXEBI6nbGGsLLBwJdcg6keAtp+Y7IMmgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/9k=',
            }}
          />
        </PictureContainer>

        <ProfileInfo>
          <CustomText font="Montserrat_Bold" color="white">
            BH Softwares
          </CustomText>

          <CustomText color="white" fontSize="12">
            Empresa de Desenvolvimento
          </CustomText>
        </ProfileInfo>
      </ProfileContainer>

      {rows.map(({ Icon, ...row }) => (
        <Row
          onPress={() => row.navigateTo && navigateAndCloseModal(row.navigateTo)}
          key={row.title}
        >
          <IconContainer>
            <Icon />
          </IconContainer>
          <TextContainer>
            <CustomText color="white" font="Montserrat_Bold" textAlign="left" fontSize="18">
              {row.title}
            </CustomText>
          </TextContainer>
          <IconContainer>
            <MaterialIcons name="keyboard-arrow-right" size={35} color="#FFF" />
          </IconContainer>
        </Row>
      ))}

      <Footer>
        <CustomText fontSize="10" color="#dedede">
          Versão 0.0.1
        </CustomText>
      </Footer>
    </View>
  );
};

export default Menu;
