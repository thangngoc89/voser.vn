import{r as s,j as o,t as e}from"./index-1ad1b3d7.js";import{p as i}from"./pocketbase-8cd5b0bf.js";const m=async({request:a})=>{const t=Object.fromEntries(await a.formData());try{return await i.collection("users").authWithPassword(String(t.username),String(t.password)),s("/")}catch(r){if((r==null?void 0:r.status)===400)return o({error:e("ui.error.username or password is incorrect")},400)}};export{m as action};
