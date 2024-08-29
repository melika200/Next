import { useRouter } from "next/router";
import db from "../../../data/db.json";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";
import styles from "@/styles/products.module.css";

function ProductsByCategory() {
  const { category } = useRouter().query;
  const [products, setProducts] = useState(db[category]);
  const [searchkey, setSearchkey] = useState("");
  useEffect(() => {
    setProducts(db[category]);
    setSearchkey("");
  }, [category]);

  useEffect(() => {
    if (searchkey) {
      const searchProduct = db[category].filter((product) =>
        product.text.includes(searchkey)
      );
      setProducts(searchProduct);
    } else {
      setProducts(db[category]);
    }
  }, [searchkey]);

  return (
    <div className="container">
      <div className={`${styles.searchContainer} section`}>
        <input
          onChange={(e) => setSearchkey(e.target.value)}
          type="text"
          placeholder="دنبال چی میگردی؟"
          className={styles.search}
          value={searchkey}
        />
      </div>

      <div className="section">
        <h1>محصولات ({category})</h1>
        <div className="row">
          {products?.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductsByCategory;
