import Layout from "@/components/layout";
import SearchForm from "@/components/search-form";
import ListRepos from "@/components/list-repos";

export default function Home() {
  return (
    <Layout>
      <SearchForm />
      <ListRepos />
    </Layout>
  );
}
