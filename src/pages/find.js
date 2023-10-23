import { getAllSchemes } from "@/firebase";
import SearchPage from "@/components/_pages/find/searchpage";


export async function getServerSideProps() {
    const data = await getAllSchemes;

    return { props: { filters: data.filters, schemes: JSON.stringify(data.schemes) } };
}

export default function Find({ filters, schemes }) {

    const allSchemes = JSON.parse(schemes);

    return <SearchPage schemes={allSchemes} filters={filters} />
}