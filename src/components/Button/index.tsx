import './styles.css';

type Props = {
  textButton: string;
};

export default function Button({ textButton }: Props) {
  return (
    <div className="dsc-container">
      <button className="button">{textButton}</button>
    </div>
  );
}
