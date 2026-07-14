import type { Language } from '@/providers/language-provider';

export const translations = {
  EN: {
    common: {
      morning: 'Morning',
      dark: 'Dark',
    },
    nav: {
      designStudio: 'Design Studio',
      premadeDesigns: 'Premade Designs',
      products: 'Products',
      trackOrder: 'Track Order',
      startOrder: 'Start Order',
    },
    home: {
      eyebrow: 'Same-day custom printing',
      title1: 'YOUR DESIGN.',
      title2: 'YOUR STYLE.',
      lead:
        'Create a custom T-shirt or hoodie, preview the exact placement, pay online with Cash App, and choose pickup or shipping.',
      startDesigning: 'Start Designing',
      browseDesigns: 'Browse Premade Designs',
      locationsCount: 'Georgia locations',
      pickupToday: 'Same-day pickup',
      freeShipping: 'Free shipping',
      exactPrint: 'What you see is what we print',
      simpleTitle: 'Simple from start to finish',
      simpleSubtitle: 'Only the details the customer needs.',
      chooseLabel: '1. Choose',
      chooseTitle: 'T-Shirt, Hoodie, or your garment',
      chooseText:
        'T-shirts and hoodies are available in store. Other garments are customer supplied.',
      designLabel: '2. Design',
      designTitle: 'Upload image or add text',
      designText:
        'Up to 5 images and 15 text items, with exact placement and size.',
      payLabel: '3. Pay',
      payTitle: 'Cash App online',
      payText:
        'Upload proof of payment. Production begins after verification.',
      locationsTitle: 'Locations',
      footer:
        'Custom orders are final • No refunds once production begins.',
    },
  },

  ES: {
    common: {
      morning: 'Mañana',
      dark: 'Oscuro',
    },
    nav: {
      designStudio: 'Estudio de Diseño',
      premadeDesigns: 'Diseños Prediseñados',
      products: 'Productos',
      trackOrder: 'Rastrear Pedido',
      startOrder: 'Comenzar Pedido',
    },
    home: {
      eyebrow: 'Impresión personalizada el mismo día',
      title1: 'TU DISEÑO.',
      title2: 'TU ESTILO.',
      lead:
        'Crea una camiseta o sudadera personalizada, revisa la ubicación exacta, paga con Cash App y elige recogida o envío.',
      startDesigning: 'Empezar a Diseñar',
      browseDesigns: 'Ver Diseños',
      locationsCount: 'Ubicaciones en Georgia',
      pickupToday: 'Recogida el mismo día',
      freeShipping: 'Envío gratis',
      exactPrint: 'Imprimimos exactamente lo que ves',
      simpleTitle: 'Simple de principio a fin',
      simpleSubtitle: 'Solo los detalles que el cliente necesita.',
      chooseLabel: '1. Elegir',
      chooseTitle: 'Camiseta, sudadera o tu propia prenda',
      chooseText:
        'Las camisetas y sudaderas están disponibles en tienda. Otras prendas deben ser proporcionadas por el cliente.',
      designLabel: '2. Diseñar',
      designTitle: 'Sube una imagen o añade texto',
      designText:
        'Hasta 5 imágenes y 15 textos, con tamaño y ubicación exactos.',
      payLabel: '3. Pagar',
      payTitle: 'Cash App en línea',
      payText:
        'Sube el comprobante de pago. La producción comienza después de la verificación.',
      locationsTitle: 'Ubicaciones',
      footer:
        'Los pedidos personalizados son definitivos • No hay reembolsos una vez iniciada la producción.',
    },
  },

  AR: {
    common: {
      morning: 'الوضع الصباحي',
      dark: 'الوضع الداكن',
    },
    nav: {
      designStudio: 'استوديو التصميم',
      premadeDesigns: 'التصميمات الجاهزة',
      products: 'المنتجات',
      trackOrder: 'تتبع الطلب',
      startOrder: 'ابدأ الطلب',
    },
    home: {
      eyebrow: 'طباعة مخصصة في نفس اليوم',
      title1: 'تصميمك.',
      title2: 'أسلوبك.',
      lead:
        'صمم تيشيرت أو هودي مخصص، وشاهد مكان الطباعة بدقة، وادفع عبر Cash App، واختر الاستلام أو الشحن.',
      startDesigning: 'ابدأ التصميم',
      browseDesigns: 'تصفح التصميمات الجاهزة',
      locationsCount: 'فروع في جورجيا',
      pickupToday: 'استلام في نفس اليوم',
      freeShipping: 'شحن مجاني',
      exactPrint: 'ما تراه هو ما نطبعه',
      simpleTitle: 'بسيط من البداية للنهاية',
      simpleSubtitle: 'فقط التفاصيل التي يحتاج العميل إلى معرفتها.',
      chooseLabel: '١. اختر',
      chooseTitle: 'تيشيرت أو هودي أو أحضر قطعتك',
      chooseText:
        'التيشيرتات والهوديز متوفرة لدينا. أما القطع الأخرى فيحضرها العميل.',
      designLabel: '٢. صمم',
      designTitle: 'ارفع صورة أو أضف كتابة',
      designText:
        'حتى 5 صور و15 عنصر كتابة مع تحديد دقيق للحجم والمكان.',
      payLabel: '٣. ادفع',
      payTitle: 'الدفع عبر Cash App',
      payText:
        'ارفع إثبات الدفع، ويبدأ التنفيذ بعد التأكد من الدفع.',
      locationsTitle: 'الفروع',
      footer:
        'الطلبات المخصصة نهائية • لا يوجد استرجاع بعد بدء التنفيذ.',
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
