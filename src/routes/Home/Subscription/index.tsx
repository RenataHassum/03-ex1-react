import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';

export default function Subscription() {
  return (
    <>
      <Card textCard="Página de inscrição" />
      <Link to="/promotion">
        <Button textButton="Ver promoção" />
      </Link>
    </>
  );
}
