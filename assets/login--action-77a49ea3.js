import{p as n}from"./pocketbase-8cd5b0bf.js";import{r as s,j as o}from"./index-c66b48bc.js";const e=async({request:a})=>{const r=Object.fromEntries(await a.formData());try{return await n.collection("users").authWithPassword(String(r.username),String(r.password)),s("/")}catch(t){if((t==null?void 0:t.status)===400)return o({error:"Tên đăng nhập hoặc mật khẩu không đúng"},400)}};export{e as action};
