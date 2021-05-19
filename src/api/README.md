# How to use
## React
1. Add Submodule in your repository using 
```bash
git submodule add <module-repository> /path/to/api/in/your/repository
```
2. Add api `src` folder path in your `tsconfig.json` file in `include ` section
```json
  "include": [
    "src",
    "src/api/src/"
  ]
```

3. Invoke  `configure` function in `configure.ts` file with request adapter corresponding to your environment, it set up base configuration for sdk.
### Example
for axios use `axios-adapter`
```js
configure({
    fetcher: axiosAdapter(axios),
    tokenExtractor: () => localStorage.get('token'),
    backendUrl: 'http://backend-url/',
})
```

4. Use any functions in src/functions
See `src/example.ts` 

# Structure
```txt
src
 |-functions
 |    |-domain1
 |    |-domain2
 |    |    |-models
 |    |    |    |-type1.ts
 |    |    |    |-type2.ts
 |    |    |-function-1.ts
 |    |          |-Request type        
 |    |          |-Response type      
 |    |          |-Endpoint type    
 |    |          |-Actual endpoint invocation
 |    |    |-function-2.ts
```

