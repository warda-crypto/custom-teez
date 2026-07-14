'use client';

import Image from 'next/image';
import mockups from '@/mockups-manifest.json';

export type GarmentProduct = 'tshirt' | 'hoodie' | 'sweatshirt';
export type GarmentColor = 'black' | 'white' | 'sand';
export type GarmentView = 'front' | 'back' | 'left-sleeve' | 'right-sleeve';

type Props = {
  product: GarmentProduct;
  color: GarmentColor;
  view: GarmentView;
  alt?: string;
};

export function GarmentMockup({
  product,
  color,
  view,
  alt = 'Garment preview',
}: Props) {
  const src = mockups[product][color][view];

  return (
    <div className="garmentMockupFrame">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 800px) 92vw, 560px"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
