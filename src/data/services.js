import {
    Car,
    Wrench,
    HandCoins,
    Repeat,
    ShieldCheck,
    Headset,
} from "lucide-react";

const services = [
    {
        id: 1,
        title: "Araç Satışı",
        description: "Geniş araç yelpazemizle bütçenize uygun otomobilleri sunuyoruz.",
        icon: Car,
    },
    {
        id: 2,
        title: "Ekspertiz",
        description: "Tüm araçlarımız detaylı ekspertizden geçirilerek satışa sunulur.",
        icon: Wrench,
    },
    {
        id: 3,
        title: "Finansman",
        description: "Size özel kredi ve ödeme seçenekleri sunuyoruz.",
        icon: HandCoins,
    },
    {
        id: 4,
        title: "Takas",
        description: "Eski aracınızı değerinde alıyor, yeni aracınızla takas yapıyoruz.",
        icon: Repeat,
    },
    {
        id: 5,
        title: "Sigorta",
        description: "Kasko ve trafik sigortası işlemlerinizi hızlıca tamamlıyoruz.",
        icon: ShieldCheck,
    },
    {
        id: 6,
        title: "7/24 Destek",
        description: "Satış öncesi ve sonrası her zaman yanınızdayız.",
        icon: Headset,
    },
];

export default services;