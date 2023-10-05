import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  // form
  formAssetCreationData:Customer=new Customer();
customers: Customer[];

 






  constructor(private httpClient: HttpClient,private router:Router) { }

  //1 Get all vendors - promises 
//http://localhost:9091/api/assetcreation  
getAllAssetCustomers(): void {
  this.httpClient.get(environment.apiUrl + '/api/customers')
  .toPromise()
  .then(response =>{
    // console.log(response);
    this.customers=response as Customer[];
  },
  error=>{
    console.log(error);
  });
}

//2 Get all employees - Observable Types
getAllAssetDefinitionList(): Observable<any>{
  return this.httpClient.get(environment.apiUrl + '/api/assetcreation')
}

// insert
insertAssetCreation(assetcreation:Assetcreation):Observable<any>{
  return this.httpClient.post(environment.apiUrl + '/api/assetcreation',assetcreation)
}

// update assset creation
updateAssetCreation(assetcreation:Assetcreation):Observable<any>{
  return this.httpClient.put(environment.apiUrl + '/api/assetcreation',assetcreation)
}

}
