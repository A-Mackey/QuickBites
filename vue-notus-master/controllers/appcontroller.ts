// 1. import Request and Response objects from express
import { Request, Response } from "express";
// 2. import the ProductDetails class
import { ProductDetails } from './../models/productdetails';
// 3. import the Dao class
import { Dao } from "./../models/dao";
// 4. The AppController class
export class AppController {
    // 4.1 Define an instance of the Dao class
    private dao: Dao;
    constructor() {
        this.dao = new Dao();
    }
    // 4.2 the init method accepts initDbAndContainer() method to create database and container
    async init() { 
        await this.dao.initDbAndContainer();
    }
   // 4.3 this method accepts queryData() method to return query result  
    async getData(request: Request, response: Response) {
        const products = await this.dao.queryData();

        response.send({ data: products });
    }
    // 4.4 this method accepts the ProductDetails in the request body and create product by accepting addProduct() method
    async addProduct(request: Request, response: Response) {
        const body = request.body;
        console.log(`Received Body ${JSON.stringify(body)}`);
        const product = new ProductDetails(
            body.Includes,
            body.MaxTime,
            body.Equipment,
            body.MaxBudget,
            body.MinPeople
        );
        console.log(`Product ${JSON.stringify(product)}`);
        let data = await this.dao.addProduct(product);
        response.send({ data: data });
    }
    // 4.5 this method is used to update the product
    async updateProduct(request: Request, response: Response) {
        const body = request.body;
        const id = request.params.id;
        console.log(`Received Body ${JSON.stringify(body)}`);
        const product = new ProductDetails(
            body.Includes,
            body.MaxTime,
            body.Equipment,
            body.MaxBudget,
            body.MinPeople
        );
        console.log(`Product ${JSON.stringify(product)}`);
        let data = await this.dao.updateProduct(id,product);
        response.send({ data: data });
    }

}