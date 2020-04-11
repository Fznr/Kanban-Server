**REST API DOCUMENTATION**
----
* **BaseURL**
http://localhost:3000

**Return List of Task**

* **URL**

  _/task

* **Method:**

  `GET`

* **Success Response:**
  

  * **Code:** 200 <br />
   ```javascript
   {
    "id": "",
    "title": "",
    "category": "",
    "createdAt": "",
    "updatedAt": "",
    "UserId:""
   }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />

* **Sample Call:**
```javascript
https://ancient-mesa-33338.herokuapp.com/task'
```



**Return List of Task By Id**

* **URL**

  _/task/:id_

* **Method:**

  `GET`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
```javascript
   {
    "id": "",
    "title": "",
    "category": "",
    "createdAt": "",
    "updatedAt": "",
    "UserId:""
   }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />

  * **Sample Call:**
```javascript
https://ancient-mesa-33338.herokuapp.com/task/:id'
```




**Create Task**

* **URL**

  _/task

* **Method:**

  `POST`

* **Data Params**
```javascript
    title=[integer],
    category=[integer]
```

* **Success Response:**

  * **Code:** 201 <br />
```javascript
   {
    "id": "",
    "title": "",
    "category": "",
    "createdAt": "",
    "updatedAt": "",
    "UserId:""
   }
```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "SequelizeValidationError" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />

* **Sample Call:**
```javascript
https://ancient-mesa-33338.herokuapp.com/task'
```



**Delete Task**

* **URL**

  _/task/:id_

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
```javascript
   {
    "id": "",
    "title": "",
    "category": "",
    "createdAt": "",
    "updatedAt": "",
    "UserId:""
   }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />

* **Sample Call:**
```javascript
https://ancient-mesa-33338.herokuapp.com/task/:id'
```



**Update Task**

* **URL**

  _/task/:id_

* **Method:**

  `PATCH`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

* **Data Params**
```javascript
    category=[integer]
```

* **Success Response:**

  * **Code:** 200 <br />
```javascript
   {
    "id": "",
    "title": "",
    "category": "",
    "createdAt": "",
    "updatedAt": "",
    "UserId:""
   }
```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "SequelizeValidationError" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{...}` <br /> <br />

* **Sample Call:**
```javascript
https://ancient-mesa-33338.herokuapp.com/task/:id'
```