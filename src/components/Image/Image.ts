export interface NextImageProps {
  src: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
}

export interface MantineImageProps {
  src: string;
  radius: string;
  alt?: string;
  w?: number | "auto";
  h?: number | "auto";
}
