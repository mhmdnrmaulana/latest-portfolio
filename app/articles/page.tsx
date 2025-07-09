import LayoutNavbar from "@/components/layouts/elements/layout-navbar";
import { SimpleArticleList } from "@/components/layouts/elements/simple_link";
import Article from "@/module/article/article";

export default function ArticlePage() {
  return (
    <LayoutNavbar>
      <Article />
    </LayoutNavbar>
  );
}
