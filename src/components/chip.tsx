interface ChipProps {
  name: string;
  id: number;
  highlighted: boolean;
  onRemove: (id: number) => void;
}

export const Chip = ({ name, id, onRemove, highlighted }: ChipProps) => {
  return (
    <div
      className={`flex items-center my-1 mr-2  border-2 rounded-md px-2 py-1 space-x-4 ${
        highlighted
          ? 'border-red-300 bg-red-200'
          : 'border-gray-300 bg-gray-200'
      }`}
    >
      <span>{name}</span>
      <span
        role='button'
        onClick={(event) => {
          onRemove(id);
          event.stopPropagation();
        }}
      >
        &#10005;
      </span>
    </div>
  );
};
