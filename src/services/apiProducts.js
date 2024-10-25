import supabase from "../services/supabase";
import { PAGE_SIZE } from "../utils/constants";

//eslint-disable-next-line
export async function getProducts({ page }) {
  let query = supabase.from("fruits").select("*", { count: "exact" });

  //Pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  //eslint-disable-next-line
  const { data, error, count } = await query;

  if (error) {
    throw new Error("Couldnot fetch data");
  }
  console.log(data);
  return { data, count };
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("fruits")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Product not found");
  }

  return data;
}

export async function getCart() {
  // const { data, error } = await supabase.from("cart").select("*, fruits(*)");
  const { data, error } = await supabase
    .from("cart")
    .select(
      "*, fruits(name,price,sellerName,weight, image, available, stockQuantity)"
    );

  if (error) {
    console.error(error);
    throw new Error("Cart not found");
  }
  console.log(data);
  return data;
}

export async function addToCart(obj) {
  const { data, error } = await supabase.from("cart").insert(obj).select();
  if (error) {
    console.error(error);
    throw new Error("Cart not found");
  }
  console.log(data);
  return data;
}

//delete from cart
export async function deleteCartItem(id) {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cart item couldnot be deleted");
  }
  return data;
}
