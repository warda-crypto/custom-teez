'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { PublicNav } from '@/components/public-nav';
import { useLanguage } from '@/providers/language-provider';
import { getStudioT } from './lib/translations';
import {
  getProduct,
  products,
  type PrintArea,
  type ProductGroup,
} from './data/products';
import { VINYL_COLORS } from './data/vinyl-colors';
import { ColorSelector } from './components/color-selector';
import { Preview } from './components/preview';

type Design = {
  image?: string;
  text?: string;
};

const emptyDesigns: Record<PrintArea, Design> = {
  front: {},
  back: {},
  leftSleeve: {},
  rightSleeve: {},
  hood: {},
  pocket: {},
};

export default function Studio() {
  const { language } = useLanguage();
  const t = getStudioT(language);

  const fileInput = useRef<HTMLInputElement>(null);

  const [group, setGroup] = useState<ProductGroup>('adult');
  const [productId, setProductId] = useState('adult-tshirt');
  const [area, setArea] = useState<PrintArea>('front');

  const [colorId, setColorId] = useState('black');
  const [vinylColorId, setVinylColorId] = useState('white');

  const [size, setSize] = useState('M');
  const [designs, setDesigns] = useState(emptyDesigns);

  const [lowQuality, setLowQuality] = useState(false);
  const [enhancementRequested, setEnhancementRequested] = useState(false);
  const [saved, setSaved] = useState(false);

  const product = getProduct(productId);

  const garmentColor =
    product.colors.find((color) => color.id === colorId) ??
    product.colors[0];

  const vinylColor =
    VINYL_COLORS.find((color) => color.id === vinylColorId) ??
    VINYL_COLORS[0];

  const groupProducts = useMemo(
    () => products.filter((productItem) => productItem.group === group),
    [group],
  );

  const areaLabels: Record<PrintArea, string> = {
    front: t.front,
    back: t.back,
    leftSleeve: t.leftSleeve,
    rightSleeve: t.rightSleeve,
    hood: t.hood,
    pocket: t.pocket,
  };

  useEffect(() => {
    const savedStudio = localStorage.getItem('ct-studio-v2');

    if (!savedStudio) {
      return;
    }

    try {
      const savedData = JSON.parse(savedStudio);

      setGroup(savedData.group ?? 'adult');
      setProductId(savedData.productId ?? 'adult-tshirt');
      setArea(savedData.area ?? 'front');
      setColorId(savedData.colorId ?? 'black');
      setVinylColorId(savedData.vinylColorId ?? 'white');
      setSize(savedData.size ?? 'M');
      setDesigns(savedData.designs ?? emptyDesigns);
      setEnhancementRequested(Boolean(savedData.request));
    } catch {
      // Ignore invalid saved drafts.
    }
  }, []);

  useEffect(() => {
    const saveTimer = setTimeout(() => {
      localStorage.setItem(
        'ct-studio-v2',
        JSON.stringify({
          group,
          productId,
          area,
          colorId,
          vinylColorId,
          size,
          designs,
          request: enhancementRequested,
        }),
      );

      setSaved(true);

      const savedMessageTimer = setTimeout(() => {
        setSaved(false);
      }, 900);

      return () => clearTimeout(savedMessageTimer);
    }, 500);

    return () => clearTimeout(saveTimer);
  }, [
    group,
    productId,
    area,
    colorId,
    vinylColorId,
    size,
    designs,
    enhancementRequested,
  ]);

  function switchGroup(nextGroup: ProductGroup) {
    const firstProduct =
      products.find((productItem) => productItem.group === nextGroup) ??
      products[0];

    setGroup(nextGroup);
    setProductId(firstProduct.id);
    setArea(firstProduct.areas[0]);
    setColorId(firstProduct.colors[0].id);
    setSize(firstProduct.sizes[0]);
  }

  function switchProduct(nextProductId: string) {
    const nextProduct = getProduct(nextProductId);

    setProductId(nextProductId);
    setArea(nextProduct.areas[0]);
    setColorId(nextProduct.colors[0].id);
    setSize(nextProduct.sizes[0]);
  }

  function updateDesign(nextDesign: Design) {
    setDesigns((currentDesigns) => ({
      ...currentDesigns,
      [area]: {
        ...currentDesigns[area],
        ...nextDesign,
      },
    }));
  }

  function uploadImage(uploadedFile?: File) {
    if (!uploadedFile) {
      return;
    }

    const imageUrl = URL.createObjectURL(uploadedFile);

    updateDesign({
      image: imageUrl,
    });

    const uploadedImage = new Image();

    uploadedImage.onload = () => {
      setLowQuality(
        uploadedImage.naturalWidth < 900 ||
          uploadedImage.naturalHeight < 900,
      );
    };

    uploadedImage.src = imageUrl;
  }

  function rotateGarment() {
    const currentAreaIndex = product.areas.indexOf(area);
    const nextAreaIndex = (currentAreaIndex + 1) % product.areas.length;

    setArea(product.areas[nextAreaIndex]);
  }

  return (
    <div className="shell">
      <PublicNav />

      <main className="container section">
        <div className="top">
          <div>
            <h1
              style={{
                fontSize: 52,
                letterSpacing: -2,
                margin: 0,
              }}
            >
              {t.title}
            </h1>

            <p className="muted">{t.sub}</p>
          </div>

          <span className="badge">{saved ? t.saved : t.autosave}</span>
        </div>

        <div className="designer">
          <aside className="toolbox">
            <h3>Type</h3>

            <div className="tabs">
              {(
                ['adult', 'kids', 'bring-your-own'] as ProductGroup[]
              ).map((productGroup) => (
                <button
                  key={productGroup}
                  type="button"
                  className={`tab ${group === productGroup ? 'active' : ''}`}
                  onClick={() => switchGroup(productGroup)}
                >
                  {productGroup === 'adult'
                    ? t.adult
                    : productGroup === 'kids'
                      ? t.kids
                      : t.byo}
                </button>
              ))}
            </div>

            <h3>{t.product}</h3>

            <select
              value={productId}
              onChange={(event) => switchProduct(event.target.value)}
            >
              {groupProducts.map((productItem) => (
                <option key={productItem.id} value={productItem.id}>
                  {productItem.name}
                </option>
              ))}
            </select>

            <h3>{t.size}</h3>

            <select
              value={size}
              onChange={(event) => setSize(event.target.value)}
            >
              {product.sizes.map((productSize) => (
                <option key={productSize} value={productSize}>
                  {productSize}
                </option>
              ))}
            </select>

            <ColorSelector
              colors={product.colors}
              selected={garmentColor.id}
              onChange={(selectedColor) =>
                setColorId(selectedColor.id)
              }
              label={t.color}
            />

            <h3>{t.area}</h3>

            <div className="tabs">
              {product.areas.map((printArea) => (
                <button
                  key={printArea}
                  type="button"
                  className={`tab ${area === printArea ? 'active' : ''}`}
                  onClick={() => setArea(printArea)}
                >
                  {areaLabels[printArea]}
                </button>
              ))}
            </div>

            <h3>{t.image}</h3>

            <input
              ref={fileInput}
              hidden
              type="file"
              accept="image/*"
              onChange={(event) =>
                uploadImage(event.target.files?.[0])
              }
            />

            <button
              type="button"
              className="secondary"
              onClick={() => fileInput.current?.click()}
            >
              {designs[area].image ? t.replace : t.upload}
            </button>

            <h3>{t.text}</h3>

            <textarea
              value={designs[area].text ?? ''}
              placeholder={t.placeholder}
              onChange={(event) =>
                updateDesign({
                  text: event.target.value,
                })
              }
            />

            <ColorSelector
              colors={VINYL_COLORS}
              selected={vinylColor.id}
              onChange={(selectedColor) =>
                setVinylColorId(selectedColor.id)
              }
              label="Vinyl color"
            />

            {lowQuality && (
              <div className="warning">
                <b>{t.low}</b>
                <br />
                {t.lowBody}

                <label className="studioCheckRow">
                  <input
                    type="checkbox"
                    checked={enhancementRequested}
                    onChange={(event) =>
                      setEnhancementRequested(event.target.checked)
                    }
                  />

                  <span>{t.request}</span>
                </label>
              </div>
            )}
          </aside>

          <Preview
             product={product}
             color={garmentColor}
             area={area}
             image={designs[area].image}
             text={designs[area].text}
             vinylColorHex={vinylColor.hex}
             onRotate={rotateGarment}
             rotateLabel={t.rotate}
          />

          <aside className="summary">
            <h3>{t.summary}</h3>

            <p>
              <b>{product.name}</b>
              <br />
              Garment color: {garmentColor.name}
              <br />
              Vinyl color: {vinylColor.name}
              <br />
              Size: {size}
              <br />
              Print area: {areaLabels[area]}
            </p>

            {enhancementRequested && (
              <p className="badge">{t.request}</p>
            )}

            <p>{t.exact}</p>

            <label className="studioCheckRow">
              <input type="checkbox" />
              <span>{t.checked}</span>
            </label>

            <label className="studioCheckRow">
              <input type="checkbox" />
              <span>{t.final}</span>
            </label>

            <button
              type="button"
              className="glowbtn"
              style={{
                width: '100%',
                marginTop: 18,
              }}
            >
              {t.checkout}
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}