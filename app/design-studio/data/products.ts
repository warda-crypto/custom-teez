export type ProductGroup = 'adult' | 'kids' | 'bring-your-own';
export type PrintArea = 'front'|'back'|'leftSleeve'|'rightSleeve'|'hood'|'pocket';
export type ProductColor={id:string;name:string;hex:string};
export type Product={id:string;group:ProductGroup;name:string;colors:ProductColor[];sizes:string[];areas:PrintArea[]};
const C=(id:string,name:string,hex:string):ProductColor=>({id,name,hex});
const adultT=[C('black','Black','#111'),C('white','White','#fff'),C('red','Red','#d3262e'),C('blue','Blue','#2459c4'),C('grey','Grey','#9ca3af'),C('hot-pink','Hot Pink','#ff3f9f'),C('purple','Purple','#7c3aed'),C('green','Green','#16823c'),C('orange','Orange','#f97316'),C('yellow','Yellow','#facc15'),C('dark-grey','Dark Gray','#444851'),C('tan','Tan','#c8a97e'),C('olive','Olive','#727b32'),C('neon-green','Neon Green','#7cff00'),C('sand','Sand','#d7c5a3'),C('light-blue','Light Blue','#8ecae6'),C('pink','Pink','#f7a8c4'),C('neon-yellow','Neon Yellow','#eaff00'),C('mint-green','Mint Green','#9ce3cf'),C('lavender','Lavender','#c7b1ff')];
const adultH=[C('black','Black','#111'),C('white','White','#fff'),C('red','Red','#d3262e'),C('blue','Blue','#2459c4'),C('grey','Grey','#9ca3af'),C('hot-pink','Hot Pink','#ff3f9f'),C('purple','Purple','#7c3aed'),C('green','Green','#16823c'),C('orange','Orange','#f97316'),C('yellow','Yellow','#facc15'),C('dark-grey','Dark Gray','#444851'),C('tan','Tan','#c8a97e'),C('pink','Pink','#f7a8c4'),C('navy','Navy Blue','#16213e'),C('sand','Sand','#d7c5a3'),C('olive','Olive','#727b32'),C('burgundy','Burgundy','#7f1d1d'),C('khaki','Khaki','#b9aa7b'),C('sangria','Sangria','#7a1734'),C('carolina','Carolina Blue','#7baedc')];
const adultSizes=['XS','S','M','L','XL','2XL','3XL','4XL','5XL','6XL'];
export const products:Product[]=[
{id:'adult-tshirt',group:'adult',name:'Adult T-Shirt',colors:adultT,sizes:adultSizes,areas:['front','back','leftSleeve','rightSleeve','pocket']},
{id:'adult-hoodie',group:'adult',name:'Adult Hoodie',colors:adultH,sizes:adultSizes,areas:['front','back','leftSleeve','rightSleeve','hood','pocket']},
{id:'kids-tshirt',group:'kids',name:'Kids T-Shirt',colors:[C('black','Black','#111'),C('white','White','#fff'),C('red','Red','#d3262e')],sizes:['6 Months','12 Months','18 Months','24 Months','2T','3T','4T','XS','S','M','L'],areas:['front','back','leftSleeve','rightSleeve','pocket']},
{id:'kids-hoodie',group:'kids',name:'Kids Hoodie',colors:[C('black','Black','#111')],sizes:['XS','S','M','L'],areas:['front','back','leftSleeve','rightSleeve','hood','pocket']},
{id:'kids-sweatshirt',group:'kids',name:'Kids Sweatshirt',colors:[C('black','Black','#111'),C('white','White','#fff'),C('red','Red','#d3262e')],sizes:['S','M','L'],areas:['front','back','leftSleeve','rightSleeve','pocket']},
{id:'bring-your-own',group:'bring-your-own',name:'Bring Your Own Garment',colors:[C('custom','Customer garment','#d1d5db')],sizes:['Customer supplied'],areas:['front','back','leftSleeve','rightSleeve','hood','pocket']}
];
export const getProduct=(id:string)=>products.find(p=>p.id===id)??products[0];

