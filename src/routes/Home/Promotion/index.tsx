import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';

export default function Promotion() {
  return (
    <>
      <Card textCard="Página de promoção" />
      <Link to="/sub">
        <Button textButton="Quero participar" />
      </Link>
    </>
  );
}
