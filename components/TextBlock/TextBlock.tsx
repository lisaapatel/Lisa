export type Maybe<T> = T | null | undefined;

export interface TextBlockProps {
  header: string;
  subtext?: Maybe<string>;
}

export function TextBlock({ header, subtext }: TextBlockProps) {
  return (
    <div className="my-2">
      <h1 className="mb-1 text-xl font-bold">{header}</h1>
      <span>{subtext}</span>
    </div>
  );
}
