'use client';

export type ColorItem = {
  id: string;
  name: string;
  hex: string;
};

type ColorSelectorProps = {
  colors: ColorItem[];
  selected: string;
  onChange: (color: ColorItem) => void;
  label: string;
};

export function ColorSelector({
  colors,
  selected,
  onChange,
  label,
}: ColorSelectorProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold text-white">{label}</h3>

      <div className="grid grid-cols-3 gap-2">
        {colors.map((color) => {
          const active = selected === color.id;

          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onChange(color)}
              title={color.name}
              className={[
                "rounded-xl border p-2 transition-all",
                active
                  ? "border-cyan-400 bg-cyan-400/10"
                  : "border-white/10 hover:border-cyan-300 hover:bg-white/5",
              ].join(" ")}
            >
              <div className="flex flex-col items-center gap-2">
                <span
                  className="h-8 w-8 rounded-full border shadow-sm"
                  style={{
                    background: color.hex,
                    borderColor:
                      color.id === "white"
                        ? "#999"
                        : "rgba(255,255,255,.15)",
                  }}
                />

                <span className="truncate text-[11px] text-white">
                  {color.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}