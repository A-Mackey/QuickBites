export class ProductDetails {
    constructor(
        public Includes: string,
        public MaxTime: string,
        public Equipment: string,
        public MaxBudget: BigInteger,
        public MinPeople: BigInteger
    ){}
}