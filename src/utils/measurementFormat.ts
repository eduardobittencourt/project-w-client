export default function measurementFormat(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: value > 1000 ? "kilometer" : "meter",
    maximumFractionDigits: 1,
  }).format(value > 1000 ? value / 1000 : value);
}
