import type { Linha } from '../types';

interface Props {
  linhas: Linha[];
  selectedId: string;
  onChange: (id: string) => void;
}

export function LinhaSelector({ linhas, selectedId, onChange }: Props) {
  return (
    <div className="linha-selector">
      <label htmlFor="linha-select">Selecione uma linha de produto</label>
      <select
        id="linha-select"
        value={selectedId}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Escolha uma linha --</option>
        {linhas.map((l) => (
          <option key={l.id} value={l.id}>
            {l.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
