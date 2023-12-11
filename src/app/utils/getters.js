import bannerImageData from "../data/bannerImages.json";
import productsData from "../data/products.json";

export function getBannerImages() {
    return bannerImageData.bannerImages;
}

export function getCategories() {
    return productsData.categories;
}

export function getCategory(id) {
    const categoryId = parseInt(id);
    return productsData.categories.find(category => category.id === categoryId);
}

export function getProduct(id) {
    const productId = parseInt(id);
    return productsData.products.find(product => product.id === productId);
}

export function getProducts(ids) {
    return productsData.products.filter(product => ids.includes(product.id));
}