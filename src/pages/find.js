import { getAllSchemes } from "@/firebase";
import SearchPage from "@/components/_pages/find/searchpage";
import Head from "next/head";

export const metadata = {
    title: 'Find Schemes | Govt. Schemes'
}

export async function getServerSideProps() {
    const data = await getAllSchemes;

    return { props: { filters: data.filters, schemes: JSON.stringify(data.schemes) } };
}

export default function Find({ filters, schemes }) {

    const allSchemes = JSON.parse(schemes);

    return (
        <>
            <Head>
                <title key="title">Find Schemes | Govt. Schemes</title>
            </Head>
            <SearchPage schemes={allSchemes} filters={filters} />
        </>
    )
}