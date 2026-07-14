'use client';
import type {ProductColor} from '../data/products';
export function ColorSelector({colors,selected,onChange,label}:{colors:ProductColor[];selected:string;onChange:(c:ProductColor)=>void;label:string}){return <section><h3>{label}</h3><div className="studioColorGrid">{colors.map(c=><button type="button" key={c.id} className={'studioColorSwatch '+(selected===c.id?'active':'')} onClick={()=>onChange(c)} title={c.name}><span className="studioColorDot" style={{background:c.hex,border:c.id==='white'?'1px solid #999':undefined}}/><small>{c.name}</small></button>)}</div></section>}

