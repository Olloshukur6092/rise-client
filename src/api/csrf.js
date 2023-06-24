// import axios from "axios";
import { http } from "./axios";
export const csrfSanctum = async () => {
    try {
       await http.get("http://localhost:8000/sanctum/csrf-cookie");
    } catch (err) {
        console.log(err)
    }
}