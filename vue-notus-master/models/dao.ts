// 1. importing the required APIs for performing operations with Cosmos
import { CosmosClient, Database, Container } from '@azure/cosmos';
// 2. importing the application configuration constant for URL and Primary key 
import { appConfig } from "./../appconfig/config";
// 3. importing product details class
import { ProductDetails } from './productdetails';
// 4. The Data Access class to create various operations
export class Dao {
    // 4.1. defining class level members 
    private client: CosmosClient;
    private databaseId: string;
    private collectionId: string;
    private database: Database;
    private container: Container;
    // 4.2. constructor contains code to connect to CosmosDB Account
    constructor() {
        // 4.3. creating an instance of the CosmosClient and settings keys
        this.client = new CosmosClient({
            endpoint: appConfig.uri,
            auth: {
                masterKey: appConfig.authKey
            }
        });
        // ends here
        // 4.4. set the databaseId and containerId
        this.databaseId = appConfig.databaseId;
        this.collectionId = appConfig.containerId;
        //ends here
    }

    // 4.5. initialize the CosmosDB connections to create database and container
     async initDbAndContainer() {
         // create database if not exist
         const responseDb = await this.client.databases.createIfNotExists(
                                 {id:this.databaseId});
         this.database = responseDb.database;   
         console.log(`Database Created ${this.database}`);
         // ends here

         // create a container if not exist
          const responseContainer = await this.database.containers.createIfNotExists({
            id:this.collectionId
          });  
          this.container =  responseContainer.container;
          console.log(`Container Created ${this.container}`);
         // ends here
     }
    // ends here

    // 4.6. add product
    async addProduct(product:ProductDetails) {
        const resp = await this.container.items.create(product);
        console.log(`In the addProduct ${JSON.stringify(resp.body)}`);
        return resp.body;
    }
    // ends here

    // 4.7. query to data
    async queryData() {
        //SELECT VALUE r.children FROM root r WHERE r.lastName = @lastName
      const query = 'SELECT * FROM root';// where Includes = cookies';
      if(!this.container){
          throw new Error('The specified collection is not present');
      }  
      const result = await this.container.items.query(query).toArray();
      return result.result;
    }
    // ends here
    // 4.8. code to update product
    async updateProduct(id:string,product:ProductDetails){
        // get the document base on id parameter
        const record =  await this.container.item(id).read();
        console.log(`Record for update ${JSON.stringify(record.body)}`);
        // set the updated values
        record.body.ProductName = product.ProductName;
        record.body.CategoryName = product.CategoryName;
        record.body.SubCategory = product.SubCategory;
        record.body.Manufacturer = product.Manufacturer;
        record.body.Description = product.Description;
        record.body.Price = product.Price;
        console.log(`Record for update values ${JSON.stringify(record.body)}`);

        const updated = await this.container.item(id).replace(record.body);
        console.log(`Record after update ${JSON.stringify(updated.body)}`);
        return updated.body;
        
    }
}