import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';

export default function Initial() {
  return (
    <>
      <Card textCard="Página inicial" />
      <Link to="/promotion">
        <Button textButton="Ver promoção" />
      </Link>
    </>
  );
}
