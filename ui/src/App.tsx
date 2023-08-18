import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import fetcher from "./utils/fetcher";

const App = () => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [selectProduct, setSelectProduct] = useState<Record<string, any>>();

  // useEffect(() => {
  //   fetcher.get("/products").then((res) => {
  //     setData(res);
  //   });
  // }, []);

  const handleSelectProduct =
    (product: Record<string, any>) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      setSelectProduct(product);
    };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const copySelectedProduct = { ...selectProduct, name: value };

    setSelectProduct(copySelectedProduct);
  };

  const handleProductSave = async () => {
    const { id } = selectProduct ?? {};

    if (!id) return;

    await fetcher.put(`/products/${id}`, selectProduct!);
    const res = await fetcher.get("/products");

    setData(res);
    setSelectProduct(undefined);
  };

  return (
    <div className="flex flex-col gap-4 h-screen">
      <div className="flex justify-center gap-4">
        <input
          className="w-1/2 border-solid border-2"
          type="text"
          value={selectProduct?.name ?? ""}
          onChange={handleChange}
        />
        <button
          className="bg-black p-2 rounded text-white"
          type="button"
          onClick={handleProductSave}
        >
          update
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((product) => (
          <div key={product.id}>
            <div className="h-[200px]">
              <a onClick={handleSelectProduct(product)}>
                <img
                  className="h-[200px] object-contain"
                  src={product.url}
                  alt={product.name}
                />
              </a>
            </div>

            <b className="mt-2">{product.name}</b>
            <p className="mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
