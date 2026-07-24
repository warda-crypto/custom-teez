"use client";

import { VINYL_COLORS } from "@/app/design-studio/data/vinyl-colors";

export type VinylColor = (typeof VINYL_COLORS)[number];

type VinylColorPickerProps = {
  selectedColorId?: string;
  onChange: (color: VinylColor) => void;
  title?: string;
};

export default function VinylColorPicker({
  selectedColorId,
  onChange,
  title = "Vinyl color",
}: VinylColorPickerProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">{title}</h3>

        {selectedColorId ? (
          <span className="text-xs text-white/60">
            {VINYL_COLORS.find((color) => color.id === selectedColorId)?.name}
          </span>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {VINYL_COLORS.map((color) => {
          const isSelected = color.id === selectedColorId;
          const isLight =
            color.id === "white" ||
            color.id === "silver" ||
            color.id === "pale-blue" ||
            color.id === "powder-pink" ||
            color.id === "lemon-yellow" ||
            color.id === "stretch-mint";

          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onChange(color)}
              aria-pressed={isSelected}
              aria-label={`Select ${color.name}`}
              className={[
                "flex min-h-12 items-center gap-2 rounded-xl border px-3 py-2",
                "text-left transition",
                "hover:border-cyan-400 hover:bg-white/5",
                "focus:outline-none focus:ring-2 focus:ring-cyan-400",
                isSelected
                  ? "border-cyan-400 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.03]",
              ].join(" ")}
            >
              <span
                className={[
                  "h-7 w-7 shrink-0 rounded-lg border shadow-sm",
                  isLight ? "border-black/20" : "border-white/15",
                ].join(" ")}
                style={{ backgroundColor: color.hex }}
              />

              <span className="min-w-0">
                <span className="block truncate text-xs font-medium text-white">
                  {color.name}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}