export interface MovieProps {
  id: number;
  title: string;
  year: number;
  genre: string;
  image: string;
}

export interface ButtonProps{
  type: string;
  label: string;
  onClick: () => void;
}

export interface AlertProps{
  id: number;
  title: string;
}