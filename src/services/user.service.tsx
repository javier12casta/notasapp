import axios from "axios";
import http from "../http-common";
import user from '../pages/login'
class Service {
  getAll() {
    return http.get("/user");
  }

  get(id: String) {
    return http.get(`/user/${id}`);
    
  }

  create(data: Object) {
    return http.post("/user/", data);
  }

  update(id: String, data: Object) {
    return http.put(`/user/${id}`, data);
  }

  delete(id: String) {
    return http.delete(`/user/${id}`);
  }


}

export default new Service();