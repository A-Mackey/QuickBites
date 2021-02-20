export class ProductDetails {
    constructor(
        public ProductId: number,
        public ProductName: string,
        public CategoryName: string,
        public SubCategory: string,
        public Description: string,
        public Manufacturer: string,
        public Price: number
    ){}
}