import SuggestForm from "@/components/SuggestForm";

export const metadata = { title: "Suggest a gap · UK Gap Map" };

export default function SuggestPage() {
  return (
    <div className="page-pad prose">
      <h1>Suggest a gap</h1>
      <p className="lede">
        Spotted something missing that this map should carry? Name it. The bar: concrete and fillable (a fund,
        register, institution, dataset or legal instrument that does not exist), not a complaint about one that
        merely works badly. Curators verify every suggestion against primary sources before it appears; if it
        fits no existing domain it starts on the Other shelf.
      </p>
      <SuggestForm />
    </div>
  );
}
