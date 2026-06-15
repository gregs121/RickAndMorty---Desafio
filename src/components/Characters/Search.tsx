type SearchProps = {
    value: string;
    onChange: (value: string) => void;
};

const InputSearch = ({ value, onChange }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Pesquise o personagem"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '300px', padding: '6px 10px', fontSize: '14px' }}
    />
  );
};

export default InputSearch;