import Intla from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const formatToReal = (value: number) =>
  new Intla.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })
    .format(value)
    .replace('$', '$ ');

export default formatToReal;
