'use client';

import type {
  PrintArea,
  Product,
  ProductColor,
} from '../data/products';

import {
  GarmentMockup,
  type GarmentColor,
  type GarmentProduct,
  type GarmentView,
} from './garment-mockup';

type PreviewProps = {
  product: Product;
  color: ProductColor;
  area: PrintArea;
  image?: string;
  text?: string;
  onRotate: () => void;
  rotateLabel: string;
};

function getGarmentProduct(productId: string): GarmentProduct {
  if (productId.includes('hoodie')) return 'hoodie';
  if (productId.includes('sweatshirt')) return 'sweatshirt';

  return 'tshirt';
}

function getGarmentView(area: PrintArea): GarmentView {
  if (area === 'back') return 'back';
  if (area === 'leftSleeve') return 'left-sleeve';
  if (area === 'rightSleeve') return 'right-sleeve';

  // Pocket وHood يظهروا حاليًا على واجهة الأمام
  return 'front';
}

function getGarmentColor(colorId: string): GarmentColor {
  if (colorId === 'white') return 'white';
  if (colorId === 'sand' || colorId === 'tan' || colorId === 'khaki') {
    return 'sand';
  }

  return 'black';
}

export function Preview({
  product,
  color,
  area,
  image,
  text,
  onRotate,
  rotateLabel,
}: PreviewProps) {
  const garmentProduct = getGarmentProduct(product.id);
  const garmentView = getGarmentView(area);
  const garmentColor = getGarmentColor(color.id);

  return (
    <section className="studioCanvas">
      <div className="studioPreviewToolbar">
        <span className="badge">{area}</span>

        <button
          type="button"
          className="secondary"
          onClick={onRotate}
        >
          ↻ {rotateLabel}
        </button>
      </div>

      <div className="realisticPreviewStage">
        <GarmentMockup
          product={garmentProduct}
          color={garmentColor}
          view={garmentView}
          alt={`${product.name} ${area}`}
        />

        <div
          className={`realisticPrintZone realisticPrintZone--${area}`}
        >
          {image && (
            <img
              src={image}
              alt="Uploaded design"
              className="studioDesignImage"
            />
          )}

          {text && (
            <div className="studioDesignText">
              {text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}