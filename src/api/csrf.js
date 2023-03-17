// import axios from "axios";
import { http } from "./axios";
export const csrfSanctum = async () => {
    try {
       await http.get("sanctum/csrf-cookie");
    } catch (err) {
        console.log(err)
    }
}