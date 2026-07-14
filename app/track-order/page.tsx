
'use client'
import {useState} from 'react';import {PublicNav} from '@/components/public-nav'
export default function Track(){const [id,setId]=useState('');const [show,setShow]=useState(false);return <div className="shell"><PublicNav/><main className="container section"><div className="card" style={{maxWidth:650,margin:'auto'}}><h1 style={{fontSize:48}}>Track Order</h1><div className="field"><label>Order number</label><input value={id} onChange={e=>setId(e.target.value)} placeholder="CT-2026-000251"/></div><button className="glowbtn" style={{marginTop:16}} onClick={()=>setShow(true)}>Track</button>{show&&<div style={{marginTop:24}}><p className="badge">Order received</p><p>Payment verification → Design review → Printing → Quality check → Ready for pickup</p></div>}</div></main></div>}
