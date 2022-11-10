import './styles.css';

type Props = {
  textCard: string;
};

export default function Card({ textCard }: Props) {
  return (
    <main className="dsc-container">
      <h2 className="card">{textCard}</h2>
    </main>
  );
}
