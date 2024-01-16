interface ChipProps {
  name: string;
  id: number;
  highlighted: boolean;
  onRemove: (id: number) => void;
}

export const Chip = ({ name, id, onRemove, highlighted }: ChipProps) => {
  return (
    <div
      className={`flex items-center my-1 mr-2 bg-gray-200 border-2 rounded-md px-2 py-1 space-x-4 ${
        highlighted ? 'border-red-300' : 'border-gray-300'
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
